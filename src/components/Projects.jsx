import React, { useState, useEffect } from "react";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import DefaultContainers from "./containers/DefaultContainers";
const Projects = (props) => {
    const [data, setData] = useState(null);
    const { header } = props;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoints.projects, { method: "GET" });
                const res = await response.json();
                setData(res);
            } catch (err) {
                console.error("Projects fetch Error", err);
            }
        };
        fetchData();
    }, []);
    return (
        data ? (
            <div id="/projects">
                <Header title={header} />
                <div className="parent-container">
                   
                    {data && data.projects.map((project, index) => {
                        return (
                            <DefaultContainers
                                key={index}
                                sectionType={project}
                            />
                        );
                    })}
                </div>
            </div>
        ) : (
            <FallbackSpinner />
        )
    );
};
export default Projects;