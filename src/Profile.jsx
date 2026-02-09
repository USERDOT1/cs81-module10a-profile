import { useState } from "react";

function Profile(props) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div style={{
            border: "2px solid #1e40af",
            padding: "16px",
            maxWidth: "300px"
        }}>
        <h2>{props.name}</h2>
        <p>{props.occupation}</p>
        <p>{props.funFact}</p>

        <button onClick={() => setShowDetail(!showDetail)}>
        Toggle Detail
        </button>

        {showDetail && <p>{props.extraDetail}</p>}
        </div>
    );
}

export default Profile;
