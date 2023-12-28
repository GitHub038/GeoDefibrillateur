import useFetchDAE from '../hooks/useFetchDAE'

const DaeRender = () => {
  const { data, isLoading, error } = useFetchDAE()

  console.log(data)

  return (
    <>
      <div>
        {isLoading ? (
          'Loading...'
        ) : (
          <div className="App">
            <div className="App-header">
              <p>Futur site de notre projet</p>
            </div>
            {data.map((entry) => (
              <div key={entry.gid}>
                <h3> Name: {entry.c_nom}</h3>
                <p>
                  Address: {entry.c_adr_num} {entry.c_adr_voie},{' '}
                  {entry.c_com_cp} {entry.c_com_nom}
                </p>
                <p>Code postal: {entry.c_com_cp}</p>
                <p>Lat : {entry.c_lat_coor1}</p>{' '}
                <p>Long : {entry.c_long_coor1}</p>
                <p> Disponibilité : {entry.c_disp_j}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default DaeRender
