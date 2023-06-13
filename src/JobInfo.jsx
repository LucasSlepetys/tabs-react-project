import { FaBeer } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function JobInfo({ title, company, dates, duties }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <h4>{company}</h4>
        <h5>{dates}</h5>
      </div>
      <div>
        {duties.map((duty) => {
          const id = uuidv4();
          return (
            <div key={id}>
              <FaBeer className='job-icon' />
              <span>{duty}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JobInfo;
