import { useEffect, useState } from 'react';
import JobInfo from './JobInfo';
import CompanyList from './CompanyList';

// const url = 'https://course-api.com/react-tabs-project';
// import data from './data_offline';

const App = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const fetchData = await fetch(url);
    const json = await fetchData.json();
    setData(json);
  }

  const [currentId, setCurrentId] = useState(data[0].id);
  const [person, setPerson] = useState(
    ...data.filter((person) => person.id === currentId)
  );

  useEffect(() => {
    getData();
    console.log(data);

    setPerson(...data.filter((person) => person.id === currentId));
  }, [currentId]);
  return <></>;
  // <div>
  //   <CompanyList
  //     data={data}
  //     currentId={currentId}
  //     setCurrentId={setCurrentId}
  //   />
  //   <JobInfo {...person} />
  // </div>
};
export default App;
