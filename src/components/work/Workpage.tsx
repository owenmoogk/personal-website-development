import React from 'react';
import { Helmet } from 'react-helmet';

import workData from './work.json';
import type { StringDictionary } from './WorkItem';
import WorkItem from './WorkItem';
import { extracurricularsLink, linkedIn, resumeLink } from '@global/global';

export default function Workpage() {
  const categories = [
    'Work',
    'Awards',
    'Certificates',
    'Volunteer',
    'Education',
  ];

  return (
    <div className="main" id="workPage">
      <Helmet>
        <title>Work - Owen Moogk</title>
      </Helmet>
      <p className="title">Work</p>
      <p className="subtitle">
        Connect with me on{' '}
        <a href={linkedIn} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <br />
        or have a look at my{' '}
        <a href={resumeLink} target="_blank" rel="noreferrer">
          Resume
        </a>
      </p>
      <div id="workItems">
        {categories.map((category, key) => {
          const sectionData =
            workData[category.toLowerCase() as keyof typeof workData];
          return (
            <div key={key}>
              <h1>{category}</h1>
              <div className="workCategory" key={key}>
                {Array.isArray(sectionData) &&
                  sectionData.map((item: StringDictionary, itemKey) => {
                    return <WorkItem key={itemKey} data={item} />;
                  })}
              </div>
            </div>
          );
        })}
      </div>
      <p className="subtitle">
        A condensed version of my working documents can be found{' '}
        <a href="/assets">here</a>.
      </p>
      <p className="subtitle">
        And for anyone really curious:{' '}
        <a href={extracurricularsLink} target="_blank" rel="noreferrer">
          everything I've ever done
        </a>
        .
      </p>
    </div>
  );
}
