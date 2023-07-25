import React, { useEffect } from 'react'

function DoctorFetch() {


  useEffect(() => {
    async function fetchDoctorsDetails() {
      try{
        const resp = await fetch("http://localhost:8080/doctors");
        const data = await resp.json();
      } catch(error) {
        console.error("Failed fetch: ", error)
      }
    }
    fetchDoctorsDetails();
  }, []);

  return (
    <div>DoctorFetch</div>
  )
}

export default DoctorFetch