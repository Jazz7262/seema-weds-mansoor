import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. T Mohammed Ismail Sahab</h2>
                <h5 className="address mb-3">
                    Prop.: Stylo Tailor, M.M. Road, Adoni.
                </h5>

                <h5 className="address mb-3">
                    H.No.: 1/541, NGO's Colony,
                    <br /> Beside Rehmania Masjid,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> Andhra Pradesh - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 99850 06018, <br />
                    +91 76590 06955.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
