import React, { useContext, useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';
import AuthContext from '../../context/AuthContext/AuthContext';

const HotJobs = () => {
    // const {user}=useContext(AuthContext)
   
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://job-portal-server-for-recruiter-part3-nu-nine.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
               
                setJobs(data);
            })
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;