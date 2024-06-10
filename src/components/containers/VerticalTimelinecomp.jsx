import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const VerticalTimelinecomp = (props) => {
    const { sectionType } = props;
    const [showMoreStates, setShowMoreStates] = useState({});

    const toggleShowMore = (itemIndex) => {
        setShowMoreStates((prevStates) => ({
            ...prevStates,
            [itemIndex]: !prevStates[itemIndex],
        }));
    };

    return (
        <VerticalTimeline
            animate={true}
            lineColor='black'
        >
            {sectionType?.map((item, index) => {
                const hasWorkDescription = item.workDescription && item.workDescription.length > 0;
                const showMore = showMoreStates[index] || false;

                return (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--education"
                        contentStyle={{
                            background: '#f7f7f7', color: 'black',
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                            borderRadius: '10px'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #f7f7f7' }}
                        date={item?.dateText}
                        iconStyle={{ background: '#f7f7f7', color: 'black' }}
                        icon={<img src={item.Imgsrc} alt=""
                            className="vertical-timeline-element-icon" />}
                    >
                        <h3 className='vertical-timeline-element-title'>{item.cardtitle}</h3>
                        <h4 className='vertical-timeline-element-subtitle'>{item.cardsubtitle}</h4>
                        <p>{item.subtitle}</p>
                        {hasWorkDescription && showMore && (
                            <ul>
                                {item.workDescription?.map((description, index) => {
                                    return <li key={index}>{description}</li>
                                })}
                            </ul>
                        )}
                        {hasWorkDescription && (
                            <button onClick={() => toggleShowMore(index)}>
                                {showMore ? '- Collapse' : '+ Expand'}
                            </button>
                        )}
                    </VerticalTimelineElement>
                )
            })}
        </VerticalTimeline>
    );
};

export default VerticalTimelinecomp;