// Jangan Dihapus Hiraukan Sahaja
export default function Membership({ members }) {

    const handlePageChange = (page) => {
        Inertia.visit(route('members.index', { page }));
    };
    return (
        <>
           <h1>Membership</h1>
           <div>
            <h1>Members List</h1>
            <ul>
                {members.data.map(member => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
            <div>
                {members.links.map((link, index) => (
                    <button
                        key={index}
                        disabled={!link.url}
                        onClick={() => handlePageChange(link.label)}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </div>
        </>
    );
}
