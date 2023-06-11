function CompanyList({ data, currentId, setCurrentId }) {
  return (
    <div>
      {data.map((person) => {
        return (
          <h5
            key={person.id}
            style={
              person.id === currentId
                ? {
                    background: 'black',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '10px',
                    margin: '10px',
                  }
                : {
                    background: 'white',
                    color: 'black',
                    cursor: 'pointer',
                    padding: '10px',
                    margin: '10px',
                  }
            }
            onClick={() => setCurrentId(person.id)}
          >
            {person.company}
          </h5>
        );
      })}
    </div>
  );
}

export default CompanyList;
