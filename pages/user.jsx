// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps = async (ctx) => {
//     const { data } = await  // your fetch function here 

//     return {
//         props: {
//             user
//         }
//     }
// }
const Profile = ({ user }) => { 
    return(
        <div>
            <h1>Your profile</h1>
        </div>
    )
    }
    export default Profile