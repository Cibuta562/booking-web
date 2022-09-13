import MainNav from "../components/layout/MainNav";

const  all_bookings = [
    {
        id: 'booking1',
        title: 'Booking Maus 1',
        image: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        guest_description: 'Waiting for a maus at this place'
    },
    {
        id: 'booking2',
        title: 'Booking Maus 2',
        image: "https://images.unsplash.com/photo-1519010470956-6d877008eaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        guest_description: 'No req'
    },
    {
        id: 'booking3',
        title: 'Booking Maus 3',
        image: "https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        guest_description: 'A bottle of wine'
    },
]

function AllBookings () {
    return (
        <section>
        <MainNav/>
        <h1>All Bookings</h1>
            <ul>
                {all_bookings.map((bookings_list) => {
                    return <li key={bookings_list.id}>{bookings_list.title}
                    </li>
                })}
            </ul>
    </section>
    )
}

export default AllBookings;