import { useEffect, useState } from 'react';
import JobInfo from './JobInfo';
import CompanyList from './CompanyList';

import data from './data_offline';

const URL = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState({});

  async function getData() {
    const data = await fetch(URL);
    const json = await data.json();
    setJobs(json);
    setIsLoading(false);
    setCurrentItem(jobs[currentIndex]);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setCurrentItem(jobs[currentIndex]);
  }, [currentIndex]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <CompanyList
        data={jobs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <JobInfo {...currentItem} />
    </div>
  );
};
export default App;
