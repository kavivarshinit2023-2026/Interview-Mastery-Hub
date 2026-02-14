// firebase-listeners.js  அல்லது உன்னோட main script-ல

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

// ------------------ Resume Templates ------------------
let resumeTemplates = [];
onSnapshot(
  query(collection(db, "resumeTemplates"), orderBy("createdAt", "desc")),
  (snapshot) => {
    resumeTemplates = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    renderResumeTemplates(resumeTemplates);   // உன்னோட render function
    console.log("Resume templates updated:", resumeTemplates.length);
  }
);

// ------------------ Mock Interviews ------------------
let mockInterviews = [];
onSnapshot(
  query(collection(db, "mockInterviews"), orderBy("createdAt", "desc")),
  (snapshot) => {
    mockInterviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    renderMockInterviews(mockInterviews);
  }
);

// ------------------ Soft Skills ------------------
let softSkills = [];
onSnapshot(
  query(collection(db, "softSkills"), orderBy("createdAt", "desc")),
  (snapshot) => {
    softSkills = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    renderSoftSkills(softSkills);
  }
);

// ------------------ Interview Rules ------------------
let interviewRules = [];
onSnapshot(
  query(collection(db, "interviewRules"), orderBy("createdAt", "desc")),
  (snapshot) => {
    interviewRules = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    renderInterviewRules(interviewRules);
  }
);