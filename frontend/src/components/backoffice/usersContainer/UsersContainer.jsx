import useUsersStore from "../../../stores/backoffice/useUsersStore.js";
import {useUsers} from "../../../hooks/backoffice/useUsers.js";
import {format} from "date-fns";
import DefaultTable from "../defaultTable/DefaultTable.jsx";

const UsersContainer = () => {
    const {
        users, usersLoading, usersError,
        page, pageSize,
        setPage, setPageSize,
        totalResults
    } = useUsersStore()
    const { getAllUsers } = useUsers()

    const columns = [
        { field: "_id", header: "Codice" },
        { header: "Utente", body: row => `${row.firstName} ${row.lastName}` },
        { field: "username", header: "Username" },
        { field: "email", header: "Email" },
        { field: "role", header: "Ruolo" },
        { field: "createdAt", header: "Creato", body: row => format(row.createdAt, 'dd/MM/yyyy') },
    ]

    return (
        <>
            <section className="users-section">
                <div className="container-fluid p-4 my-4 users-container">
                    <h2 className="mb-4">Utenti</h2>
                    <DefaultTable
                        value={users}
                        page={page}
                        pageSize={pageSize}
                        setPage={setPage}
                        setPageSize={setPageSize}
                        totalValues={totalResults}
                        onFetch={getAllUsers}
                        columns={columns}
                        showActions={true}
                    />
                </div>
            </section>
        </>
    );
};

export default UsersContainer;