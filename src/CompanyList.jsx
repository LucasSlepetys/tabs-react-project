function CompanyList({ data, currentIndex, setCurrentIndex }) {
  return (
    <div>
      {data.map((person, index) => {
        return (
          <h5
            key={person.id}
            style={
              index === currentIndex
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
            onClick={() => setCurrentIndex(index)}
          >
            {person.company}
          </h5>
        );
      })}
    </div>
  );
}

export default CompanyList;
