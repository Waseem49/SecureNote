"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "@/app/components/note/note.module.css";
import { MyContext } from "@/app/context/contextapi";

const Note = () => {
  const { auth, setAuth } = useContext(MyContext);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState("");
  const [scrollHeight, setScrollHeight] = useState(0);
  const divref = useRef();
  const fetchData = async () => {
    try {
      const res = await fetch("https://note-app-waseem49.vercel.app/api/note");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setNotes(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const control = () => {
    setScrollHeight(divref?.current?.scrollHeight);
  };

  useEffect(() => {
    fetchData();
    setAuth(true);
    return () => {
      setAuth(false);
    };
  }, []);

  useEffect(() => {
    divref.current.addEventListener("scroll", control);
  }, [scrollHeight]);

  const handleAddOrUpdate = async () => {
    if (!id) {
      try {
        const res = await fetch(
          "https://note-app-waseem49.vercel.app/api/note",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ note }),
          }
        );

        if (!res.ok) {
          throw new Error("Failed to add note");
        }
        fetchData();
        setNote("");
      } catch (error) {
        console.error("Error adding note:", error);
      }
    } else {
      try {
        const res = await fetch(
          `https://note-app-waseem49.vercel.app/api/note/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ note }),
          }
        );

        if (!res.ok) {
          throw new Error("Failed to update note");
        }
        fetchData();
        setNote("");
        setId("");
      } catch (error) {
        console.error("Error updating note:", error);
      }
    }
    control();
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://note-app-waseem49.vercel.app/api/note/${id}`, {
        method: "DELETE",
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
    control();
  };

  const handleEdit = async (id) => {
    try {
      const res = await fetch(
        `https://note-app-waseem49.vercel.app/api/note/${id}`
      );
      const data = await res.json();
      setNote(data.data.note);
      setId(id);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.note_main} ref={divref}>
        <div className={scrollHeight > 461 ? styles.shadow : styles.inputfield}>
          <input
            type="text"
            placeholder="Enter note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button onClick={handleAddOrUpdate}>
            {id === "" ? "ADD" : "UPDATE"}
          </button>
        </div>
        <div className={styles.note_list}>
          {notes.map((note) => (
            <div key={note._id}>
              <h3>{note.note}</h3>
              <button onClick={() => handleDelete(note._id)}>Delete</button>
              <button onClick={() => handleEdit(note._id)}>Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Note;
