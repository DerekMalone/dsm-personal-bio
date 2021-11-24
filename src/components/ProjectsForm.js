// // import PropTypes from 'prop-types';
// import React, { useEffect } from 'react';

// const initialState = {
//   firebaseKey: '',
//   itemDescription: '',
//   itemImage: '',
//   itemName: '',
//   uid: '',
// };

// const ProjectsForm = () => {
//   const [formInput, setFormInput] = useState({});

//   useEffect(() => {
//     //
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((preState) => ({
//       ...preState,
//       [name]: value,
//     }));
//   };

//   const resetForm = () => {
//     setFormInput({ ...initialState });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if (fbKey) {
//     //   updateItem(formInput).then(() => {
//     //     resetForm();
//     //     history.push('/');
//     //   });
//     // } else {
//     //   createItem({ ...formInput, uid: user.uid }).then(() => {
//     //     resetForm();
//     //     history.push('/');
//     //   });
//     // }
//   };

//   return (
//     <>
//       <form className="stuff-form junk-div-style" onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             className="form-control"
//             name="itemName"
//             value={formInput.itemName || ''}
//             onChange={handleChange}
//             placeholder="Stuffs Name"
//             required
//           />
//         </div>
//         <div>
//           <textarea
//             className="form-control"
//             id="exampleFormControlTextarea1"
//             rows="3"
//             name="itemDescription"
//             value={formInput.itemDescription || ''}
//             onChange={handleChange}
//             placeholder="Stuffs Description"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="url"
//             className="form-control"
//             name="itemImage"
//             value={formInput.itemImage || ''}
//             onChange={handleChange}
//             placeholder="Stuffs Image"
//             required
//           />
//         </div>
//         <div className="form-btn-group">
//           <button type="submit" className="btn btn-success">
//             {fbKey ? 'Update' : 'Submit'}
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// // ProjectsForm.propTypes = {

// // };

// export default ProjectsForm;
