import React from "react";

const SingleJob = ({
  companyImage,
  companyName,
  isNew,
  isFeatured,
  position,
  postedAt,
  contractType,
  location,
  jobRole,
  jobLevel,
  languages,
  tools,
  filterFunc,
}) => {
  const tags = [jobRole, jobLevel, ...languages, ...tools];

  return (
    <div className={isFeatured ? "single_job borderLeft" : "single_job"}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "30%",
          justifyContent: "space-around",
        }}
      >
        <img src={companyImage} alt={companyName} />
        <div className="company_profile">
          <div className="info">
            <p className="company_name">{companyName}</p>{" "}
            {isNew ? <span className="new">New!</span> : ""}{" "}
            {isFeatured ? <span className="featured">Featured</span> : ""}
          </div>

          <p className="job_position">{position}</p>
          <div className="info">
            <p>{postedAt}</p>
            <span>.</span>
            <p>{contractType}</p>
            <span>.</span>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        {tags.map((ele) => (
          <button onClick={filterFunc} key={ele}>
            {ele}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SingleJob;
