import React, { useState, useEffect } from "react";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import DefaultContainers from "./containers/DefaultContainers";

const Certifications = (props) => {
    const [data, setData] = useState(null);
    const {header}= props;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoints.certifications, { method: "GET" });
                const res = await response.json();
                setData(res);
            } catch (err) {
                console.error("Certifications fetch Error", err);
            }
        };
        fetchData();
    }, []);
    return (
        data? (
            <div id="/certifications">
                <Header title={header} />
                <div className="parent-container">
                {data && data.certifications.map((cert, index) => {
                    return (
                        <DefaultContainers
                            key={index}
                            sectionType={cert}
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

export default Certifications;