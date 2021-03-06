import { Container } from "react-bootstrap";
import AdminNavBar from "../components/AdminNavBar";
import DeleteAnketa from "../components/DeleteAnketa";
import Footer from "../components/Footer";

const DeleteReports = () => {
    return(
        <div className="wrapper" >
      <AdminNavBar />
      <div className="main" >
        <Container style={{ marginTop: "7rem" }}>
          <h2 style={{ textAlign: "center", color: "#0b5ed7" }}>
          Удаление сохраненных анкет
          </h2>
        </Container>
        <main>
        <DeleteAnketa/>
        </main>
      </div>
      <Footer />
    </div>
    );
}

export default DeleteReports;