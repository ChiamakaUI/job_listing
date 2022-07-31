import React, { useState, useEffect } from "react";
import Header from "./Header";
import SingleJob from "./SingleJob";

const Jobs = ({ data }) => {
  const [filteredKeywords, setFilteredKeywords] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const filters = (e) => {
    const data = e.target.innerText;
    if (!filteredKeywords.includes(data)) {
      setFilteredKeywords([...filteredKeywords, data]);
    }
  };
  const deleteKeyword = (keyword) => {
    const remainingKeywords = filteredKeywords.filter((key) => key !== keyword);
    setFilteredKeywords(remainingKeywords);
  };
  const clearAll = () => {
    setFilteredKeywords([]);
  };
  const modifiedData = () => {
    if (filteredKeywords.length) {
      const newData = filteredData.filter((data) =>
        filteredKeywords.every(
          (element) =>
            data.languages.includes(element) ||
            data.tools.includes(element) ||
            data.role === element ||
            data.level === element
        )
      );
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredKeywords]);

  
  return (
    <div>
      {filteredKeywords.length > 0 && (
        <Header
          keywords={filteredKeywords}
          removeKeyword={deleteKeyword}
          removeAllKeywords={clearAll}
        />
      )}
      {filteredData.map((job) => (
        <SingleJob
          key={job.id}
          companyName={job.company}
          companyImage={job.logo}
          isNew={job.new}
          isFeatured={job.featured}
          position={job.position}
          postedAt={job.postedAt}
          contractType={job.contract}
          location={job.location}
          jobRole={job.role}
          jobLevel={job.level}
          languages={job.languages}
          tools={job.tools}
          filterFunc={filters}
        />
      ))}
    </div>
  );
};

export default Jobs;

// const handleFilter = (e) => {
//   const value = e.target.value;
//   // const value = inputText
//   console.log(value);
//   const filteredKeywords = data.filter(
//     (element) =>
//       element.languages.includes(value) ||
//       element.tools.includes(value) ||
//       element.role === value ||
//       element.level === value
//   );
//   setFilteredKeywords(filteredKeywords);
// };
//value={inputText}}
// const display = filteredKeywords.length === 0 ? data : filteredKeywords;
