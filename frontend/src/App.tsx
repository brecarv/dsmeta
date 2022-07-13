import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import NotificationButton from "./components/NotificationButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
      <NotificationButton />
    </>
  );
}

export default App;
