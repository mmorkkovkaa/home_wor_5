import React, {useState} from "react";

export default function PrototypeForm (){
    const[person, setPerson] =useState({
        name: 'Barbara',
        artwork: {
            city: "Hepworth",
            email: 'bhepworth@react.com',
            hobbies: 'love cats'


        }
    })

    function handleNameChange(e){
        setPerson({
            ...person,
            name: e.target.value
        })
    }

    function handleCityChange(e){
        setPerson({
            ...person,
            artwork:  {
                ...person.artwork,
                city: e.target.value
            }
        })
    }

    function handleEmailChange(e){
        setPerson({
            ...person,
            artwork:  {
                ...person.artwork,
                email: e.target.value
            }
        })
    }

    function handleHobbiesChange(e){
        setPerson({
            ...person,
            artwork:  {
                ...person.artwork,
                hobbies: e.target.value
            }
        })
    }

    return(
        <div  style={{display: 'flex', flexDirection: 'column', marginLeft: '50px', paddingTop: '30px'}}>
            <h1>ABOUT BARBARA</h1>
            <label style={{fontSize: '30px', paddingTop:'20px'}}>
                name:
                <input style={{width:'300px', height:'30px'}} value={person.name} onChange={handleNameChange}/>
            </label>
            <label style={{fontSize: '30px', paddingTop:'20px'}}>
                city:
                <input style={{width:'300px', height:'30px'}} value={person.artwork.city} onChange={handleCityChange}/>
            </label>
            <label style={{fontSize: '30px', paddingTop:'20px'}}>
                email:
                <input style={{width:'300px', height:'30px'}} value={person.artwork.email} onChange={handleEmailChange}/>
            </label>
            <label style={{fontSize: '30px', paddingTop:'20px'}}>
                hobbies:
                <input style={{width:'300px', height:'30px'}} value={person.artwork.hobbies} onChange={handleHobbiesChange}/>
            </label>

            <p style={{fontSize:'20px'}}>
                <i style={{color:'green'}}>{person.name} </i>
                {'live in '}
                {person.artwork.city}
                <br/>
                Her email is  <i style={{color:'green'}}>{person.artwork.email}</i>
                <br/>
                Her hobby : <i style={{color:'green'}}>{person.artwork.hobbies}</i>
            </p>
        </div>


    )

}
