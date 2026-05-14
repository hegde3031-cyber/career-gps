import { useState } from "react";
import skillData from "../data/skillsData";
import { supabase } from "../services/supabase";
import { getCareerSuggestion } from "../gemini";

const SkillForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // HANDLE SKILL INPUT
  const handleSkillChange = (e) => {
    const value = e.target.value;
    setSkills(value);

    const lastWord = value.split(",").pop().trim().toLowerCase();

    if (lastWord.length > 0) {
      const filtered = skillData.filter(
        (skill) =>
          typeof skill === "string" &&
          skill.toLowerCase().includes(lastWord)
      );

      setSuggestions(filtered.slice(0, 6));
    } else {
      setSuggestions([]);
    }
  };

  // CLICK SUGGESTION
  const selectSuggestion = (skill) => {
    let skillArray = skills.split(",");
    skillArray.pop();

    const updatedSkills = [...skillArray, skill].join(", ");

    setSkills(updatedSkills + ", ");
    setSuggestions([]);
  };

  // SUBMIT
  const handleSubmit = async () => {
    try {
      // SAVE TO DATABASE
      const { error } = await supabase.from("userskills").insert([
        {
          name,
          email,
          skills,
        },
      ]);

      if (error) {
        alert(error.message);
        return;
      }

      // AI RESPONSE
      const aiResponse = await getCareerSuggestion(skills);

      setResults([
        {
          title: "AI Career Suggestions",
          description: aiResponse,
        },
      ]);

      alert("Skills Saved Successfully!");
    } catch (err) {
      console.log(err);
      alert("Error getting AI response");
    }
  };

  return (
    <div className="min-h-screen bg-[#081229] flex justify-center items-center p-5">
      <div className="w-full max-w-3xl bg-[#13203b] border border-cyan-400 rounded-3xl p-8 shadow-lg">

        <h1 className="text-5xl font-bold text-cyan-400 text-center mb-8">
          Career GPS
        </h1>

        {/* NAME */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-5 p-4 rounded-xl bg-[#081229] border border-cyan-400 text-white outline-none"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-5 p-4 rounded-xl bg-[#081229] border border-cyan-400 text-white outline-none"
        />

        {/* SKILLS */}
        <textarea
          placeholder="Enter Skills"
          value={skills}
          onChange={handleSkillChange}
          className="w-full h-40 p-4 rounded-xl bg-[#081229] border border-cyan-400 text-white outline-none"
        />

        {/* SUGGESTIONS */}
        {suggestions.length > 0 && (
          <div className="bg-[#081229] border border-cyan-400 rounded-xl mt-2 p-2">
            {suggestions.map((skill, index) => (
              <p
                key={index}
                onClick={() => selectSuggestion(skill)}
                className="text-white p-2 cursor-pointer hover:bg-cyan-500 rounded-lg"
              >
                {skill}
              </p>
            ))}
          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-cyan-400 text-black font-bold py-4 rounded-xl hover:scale-105 duration-300"
        >
          Find Career
        </button>

        {/* RESULTS */}
        <div className="mt-10">
          {results.length > 0 ? (
            results.map((career, index) => (
              <div
                key={index}
                className="bg-[#1a2747] border border-cyan-400 rounded-2xl p-6 mb-5"
              >
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                  {career.title}
                </h2>

                <p className="text-white whitespace-pre-line">
                  {career.description}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center mt-6">
              No careers matched yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillForm;