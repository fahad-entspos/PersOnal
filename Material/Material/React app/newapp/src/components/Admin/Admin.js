export default function Admin (props) {
	let students = [];

	return (
		<table border="1">
			<tr>
				<th>Name</th>
				<th>Password</th>
			</tr>

			{props.name1.map((student, meraIndex) => {
				return (
					<tr>
						<td>{student.name}</td>
						<td>{student.password}</td>
						<td>
							<button
								onClick={() => {
									props.name1.splice(meraIndex, 1);
									props.nameSetStudent1([...props.name1]);

									// setStudents([...students]);
								}}
							>
								Delete
							</button>
						</td>
						<td>
							<button
								onClick={() => {
									student.name = prompt("new name ente rkaren");
									student.password = prompt("new your New Password");
									props.nameSetStudent1([...props.name1]);

									// setStudents([....students]);
								}}
							>
								Edit
							</button>
						</td>
					</tr>
				);
			})}
		</table>
	);
}
