

export default function ContactCard({contactObj}) {
    let {id, fname, lname, email, phone, type} = contactObj;
    return(
        <div className="bg-blue-500 p-5 rounded">
            <h3 className="text-2x1">{fname} {lname}</h3>
            <p><b>Email:</b></p>
            <p><b>Phone:</b></p>
            <p><b>Contact Type:</b></p>
            <p><b>ID:</b></p>
        </div>

    );
}