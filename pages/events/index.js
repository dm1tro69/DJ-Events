
import Layout from "../../components/Layout";
import EventItem from "../../components/EventItem";
import {API_URL} from "../../config";


export default function EventsPage({events}) {
    console.log(events)
    return (
        <Layout>

            <h1>Upcoming Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}
            {events.map(evt => (
                <EventItem evt={evt} key={evt.id}>

                </EventItem>
            ))}
        </Layout>
    )
}
export async function getServerSideProps(){
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()
    return {
        props: {events},
        // revalidate: 1,
    }
}
