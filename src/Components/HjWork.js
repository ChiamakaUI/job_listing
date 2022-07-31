import { useEffect, useState } from "react";
import data from "../src/data.json";
import JobListing from "./components/JobListing";
import Filters from "./components/Filters";

function App() {
    const [jobs, setJobs] = useState(data);

    const [activeFilters, setActiveFilters] = useState([]);
    const filterJobs = terms => {
        if (terms.length === 0) {
            return;
        }

        const filteredJobs = data.filter(job => {
            const tags = [...job.languages, ...job.tools, job.role, job.level];
            return terms.every(term => tags.includes(term));
        });
        setJobs(filteredJobs);
    };
    const handleRemove = filter => {
        if (activeFilters.length === 1) {
            setActiveFilters([]);
            setJobs(data);
        } else {
            setActiveFilters(prevState =>
                prevState.filter(item => item !== filter)
            );
        }
    };
    const clearFilters = () => {
        setActiveFilters([]);
        setJobs(data);
    };
    const classes = {
        main: "bg-header-desktop bg-cyan-verylight font-body text-base",
        header: "h-40 w-full bg-cyan-default flex flex-column justify-center items-end",
        jobs: "flex flex-col items-center gap-10 lg:gap-8 pt-32",
    };

    useEffect(() => {
        filterJobs(activeFilters);
    }, [activeFilters]);
    return (
        <div className={classes.main}>
            <header
                className={classes.header}
                style={{
                    backgroundImage: "url(/images/bg-header-desktop.svg",
                    backgroundPosition: "top left",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                {activeFilters.length !== 0 && (
                    <Filters
                        activeFilters={activeFilters}
                        handleRemove={handleRemove}
                        clearFilters={clearFilters}
                    />
                )}
            </header>
            <div className={classes.jobs}>
                {jobs.map(job => (
                    <JobListing
                        job={job}
                        filterJobs={filterJobs}
                        setActiveFilters={setActiveFilters}
                        activeFilters={activeFilters}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;