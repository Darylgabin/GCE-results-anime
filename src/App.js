import React, { useState } from "react";

const streamColors = {
  Arts: "from-purple-400 to-pink-400",
  Science: "from-blue-400 to-cyan-400",
  Commercial: "from-green-400 to-emerald-400",
};

const streamIcons = {
  Arts: "🎨",
  Science: "🔬",
  Commercial: "💼",
};

const studentsData = [
  {
    id: 1,
    name: "Eren Yeager",
    candidateNumber: "AL2025001",
    centerNumber: "C001",
    stream: "Science",
    subjectCount: 4,
    photo: "https://i.imgur.com/OYVpe2W.png", // Eren Yeager (Attack on Titan)
  },
  {
    id: 2,
    name: "Naruto Uzumaki",
    candidateNumber: "AL2025002",
    centerNumber: "C001",
    stream: "Commercial",
    subjectCount: 3,
    photo: "https://i.imgur.com/KZsmUi2.png", // Naruto Uzumaki (Naruto)
  },
  {
    id: 3,
    name: "Mikasa Ackerman",
    candidateNumber: "AL2025003",
    centerNumber: "C002",
    stream: "Arts",
    subjectCount: 3,
    photo: "https://i.imgur.com/3M2ZK46.png", // Mikasa Ackerman (Attack on Titan)
  },
  {
    id: 4,
    name: "Sasuke Uchiha",
    candidateNumber: "AL2025004",
    centerNumber: "C001",
    stream: "Science",
    subjectCount: 4,
    photo: "https://i.imgur.com/jT3XLqG.png", // Sasuke Uchiha (Naruto)
  },
  {
    id: 5,
    name: "Levi Ackerman",
    candidateNumber: "AL2025005",
    centerNumber: "C003",
    stream: "Commercial",
    subjectCount: 3,
    photo: "https://i.imgur.com/NT8uwct.png", // Levi Ackerman (Attack on Titan)
  },
  {
    id: 6,
    name: "Sakura Haruno",
    candidateNumber: "AL2025006",
    centerNumber: "C002",
    stream: "Arts",
    subjectCount: 4,
    photo: "https://i.imgur.com/Wxg4kcN.png", // Sakura Haruno (Naruto)
  },
  {
    id: 7,
    name: "Armin Arlert",
    candidateNumber: "AL2025007",
    centerNumber: "C001",
    stream: "Science",
    subjectCount: 3,
    photo: "https://i.imgur.com/E5X71QY.png", // Armin Arlert (Attack on Titan)
  },
  {
    id: 8,
    name: "Hinata Hyuga",
    candidateNumber: "AL2025008",
    centerNumber: "C003",
    stream: "Arts",
    subjectCount: 4,
    photo: "https://i.imgur.com/l7ZPpSl.png", // Hinata Hyuga (Naruto)
  },
  {
    id: 9,
    name: "Jean Kirstein",
    candidateNumber: "AL2025009",
    centerNumber: "C002",
    stream: "Commercial",
    subjectCount: 3,
    photo: "https://i.imgur.com/jQX8N9K.png", // Jean Kirstein (Attack on Titan)
  },
  {
    id: 10,
    name: "Kakashi Hatake",
    candidateNumber: "AL2025010",
    centerNumber: "C001",
    stream: "Science",
    subjectCount: 4,
    photo: "https://i.imgur.com/p4dz6ta.png", // Kakashi Hatake (Naruto)
  },
];

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Header */}
      <div
        className={`bg-gradient-to-r ${streamColors[student.stream]} p-5 text-white flex items-center gap-4`}
      >
        <img
          src={student.photo}
          alt={student.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-white"
          onError={(e) => (e.target.style.display = "none")}
        />
        <div>
          <h3 className="text-xl font-bold">{student.name}</h3>
          <p className="flex items-center gap-2">
            <span>{streamIcons[student.stream]}</span>
            <span>{student.stream}</span>
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between text-gray-700 font-semibold">
          <span>Candidate No.</span>
          <span>{student.candidateNumber}</span>
        </div>
        <div className="flex justify-between text-gray-700 font-semibold">
          <span>Center No.</span>
          <span>{student.centerNumber}</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-gray-600">Subjects:</span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${streamColors[student.stream]} text-white`}
          >
            {student.subjectCount} subjects
          </span>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [filter, setFilter] = useState("All");

  const filteredStudents =
    filter === "All"
      ? studentsData
      : studentsData.filter((s) => s.stream === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            GCE Advanced Level Students 2025
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Complete list of registered A/L candidates
          </p>
          {/* Filter Buttons */}
          <div className="inline-flex space-x-3">
            {["All", "Arts", "Science", "Commercial"].map((stream) => (
              <button
                key={stream}
                onClick={() => setFilter(stream)}
                className={`px-5 py-2 rounded-full font-semibold transition ${
                  filter === stream
                    ? `bg-gradient-to-r ${
                        stream === "Arts"
                          ? "from-purple-400 to-pink-400"
                          : stream === "Science"
                          ? "from-blue-400 to-cyan-400"
                          : stream === "Commercial"
                          ? "from-green-400 to-emerald-400"
                          : "from-gray-400 to-gray-600"
                      } text-white shadow-lg`
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                {stream}
              </button>
            ))}
          </div>
        </header>

        {/* Student cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>

        {/* Footer with total subjects count */}
        <footer className="mt-12 text-center text-gray-600">
          Total subjects taken by all students:{" "}
          {filteredStudents.reduce((acc, s) => acc + s.subjectCount, 0)}
        </footer>
      </div>
    </div>
  );
}
