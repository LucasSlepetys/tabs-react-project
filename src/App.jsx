import { useEffect, useState } from 'react';
import JobInfo from './JobInfo';
import CompanyList from './CompanyList';

const URL = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function getData() {
    try {
      const data = await fetch(URL);
      const json = await data.json();
      setJobs(json);
      setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
      <JobInfo {...jobs[currentIndex]} />
    </div>
  );
};
export default App;
