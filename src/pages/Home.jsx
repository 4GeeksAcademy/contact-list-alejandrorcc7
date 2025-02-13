import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="col">
			<div className="container-form col-12">

			<h2>Add a new contact</h2>


			</div>

			<div className="container">
				<div></div>
				
			<form action="">
				<div>
					<b>Full Name</b><br />
					<input className="col-8" type="text" name="" placeholder="Full Name" />
				</div>
				<div>
					<label htmlFor=""><b>Email</b></label><br />
					<input type="text" name="" placeholder="Enter email" />
				</div>
				<div>
					<label htmlFor=""><b>Phone</b></label><br />
					<input type="text" name="" placeholder="Enter phone" />
				</div>
				<div>
					<label htmlFor=""><b>Address</b></label><br />
					<input type="text" name="" placeholder="Enter address" />
				</div>

				<div>
					<button className="btn btn-primary">Check the Context in action</button>
				</div>



			</form>
			</div>
		</div>

	);
}; 