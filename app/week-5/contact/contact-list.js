import { useState } from 'react';
import ContactCard from './contact-card';
import contactData from './contacts-info.json';

export default function ContactList() {

    //let contactArray = contactData.map( (contact) =>  contact) //again this is not a copy but a reference, you want a copy for the code
    let contactArray = contactData.map( (contact) =>  ({...contact}) );  //this returns the contact object the "..." is a spread operator it spreads the operator
    
    let [filter, setFilter] = useState ("all");
    let [sortBy, setSortBy] = useState ("ID");

    let handleChangeFilter = (event) => setFilter(event.target.value);
    let handleChangeSort = (event) => setSortBy(event.target.value);

    //sorting
    contactArray = contactArray(  (a,b)  =>  {

        if(isNaN (parseInt) (a[sortBy]) ){

        //sorting alphabetically
        //let nameA= a.fname.toUpperCase();
        //let nameA = a["fname"].toUpperCase();// this is  square bracket notation
        let nameA = a[sortBy].toUpperCase();// also contains the string
        let nameB = b[sortBy].toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    } else {
        return a.id - b.id
    }

    });


    //create the filter now and then deal with the consequences //FILTERING
    if(filter != "all") {
    contactArray = contactArray.filter(
        (contact) => contact.type === filter
    );
}

    return(
        <div>
            <section className='flex mb-5 px-10 py-5 bg-blue-300'>
                <div className='flex-1'>
                   <label>Filter By:   </label> 
                   <select onChange={handleChangeFilter}>
                    <option value="all"> All Contacts</option>
                    <option value="personal"> Personal</option>
                    <option value="business"> Business</option>
                   </select>
                </div>    
                <div className='flex-1'>
                    <label>Sort By:</label>
                    <select onChange={ (event) => setSortBy(event.target.value)}>
                        <option value="fname">First Name</option>
                        <option value="lname">Last Name</option>
                       
                    </select>
                </div>
            </section>
            <section className='grid grid-cols-3 gap-5'>   
            {contactArray.map( (contact) => ( 
                <ContactCard contactObj={contact}/>
                
            ) ) }    
            </section>
        
        </div>
    );
}