function Index(props) {
return (
  <div>
  <h2>Your fortune for today</h2>
  <p><em>{props.fortune.wisdom}</em></p>
  <style jsx>{`
   div {
    margin: auto;
    width: 50%;
    text-align: center;
    margin-top: 5em;
   }
   p {
     font-style: italic;
     margin-top: 5em;
   }
 `}</style>
   </div>
)
}

const API_URL = 'http://localhost:8000/wisdom';

export async function getServerSideProps() {
  const res = await fetch(API_URL)
  const wisdom = await res.text();
  return {
    props: {
      fortune: {
        wisdom: wisdom
      }
    }
  }
}

export default Index