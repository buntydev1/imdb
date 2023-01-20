import React, { useEffect, useState } from "react"
import "./movieList.css"
import { useParams, Link } from "react-router-dom"
import Select from 'react-select'



const AddMovie = () => {
  let selectedOptionActor = [];
  let selectedOptionDirector = '';
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [name, setName] = useState("");
  let count = 0;
  const handleChange = (options) => {
    console.log(options)
    selectedOptionDirector = options;
    setSelectedOptions(options);
    console.log(selectedOptionDirector);
  };

  const handleChangeActor = (options) => {
    console.log(name);
    console.log(options)
    selectedOptionActor = options;
    setSelectedActors(options);
    console.log(selectedOptionActor);
  };



  const [actorList, setActorList] = useState([])
  const [producerList, setProducerList] = useState([])
  const [producer, setProducer] = useState({
    name: '', gender: '', bio: ''
  });
  const [actor, setactor] = useState({
    name: '', gender: ''
  });
  const [newActorList, setNewActorList] = useState([]);
  const { type } = useParams()
  const onProducerChange = (e) => {
    setProducer((prestate) => ({
      ...prestate,
      [e.target.id]: e.target.value
    }));
  }
  const onActorChange = (e) => {
    setactor((prestate) => ({
      ...prestate,
      [e.target.id]: e.target.value
    })
    )
  }



  const submitData = (e) => {
    var detail = {
      producerDetail: {},
      moviesDetail: {},
      actorDetail: {
        list: [{}]
      }
    }
    e.preventDefault();

    if (selectedOptions.length != 0) {
      detail.producerDetail = selectedOptions;
    } else {
      detail.producerDetail = producer;
    }
    if (selectedActors.length != 0) {
      detail.actorDetail.list = selectedActors;
    }
    else {
      detail.actorDetail.list = newActorList;
    }
    detail.moviesDetail.name = name;
    console.log(detail)

    fetch('http://localhost:4001/api/v1/AddMovie/', {
      method: 'POST',
      body: JSON.stringify(detail),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [type])
  // http://localhost:4001/api/v1/GetAllMovies/
  const getData = () => {
    fetch(`http://localhost:4001/api/v1/GetAllActors/`)
      .then(res => res.json())
      .then((result) => {
        console.log(result.data);
        setActorList(result.data)
      })

    fetch(`http://localhost:4001/api/v1/GetAllProducers/`)
      .then(res => res.json())
      .then((result) => {
        console.log(result.data);
        setProducerList(result.data)
      })
  }
  const submitDataActor = (e) => {
    e.preventDefault();
    setNewActorList((previous => [...previous, actor]));
    setactor({ name: '', gender: '' });
    console.log(newActorList);
  }

  return (
    <div className="movie__list" >
      <form onSubmit={submitData}>
        <h1>Movie Detail</h1>
        <section>

          <p>
            <label for="user-fullname">
              <span>Name  &nbsp; </span>
              <strong><abbr title="required"></abbr></strong>
            </label>
            <input type="text" id="user-fullname" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </p>
          {/* <p>
          <label for="user-mail">
            <span>Bio &nbsp; </span>
            <strong><abbr title="required"></abbr></strong>
          </label>
          <input type="text" id="user-mail" name="usermail" />
        </p> */}
          <p><Select style={{ color: "black !important;" }} options={producerList} getOptionLabel={option => option.name}
            getOptionValue={option => option._id} value={selectedOptions} onChange={handleChange} theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'hotpink',
                primary: 'black',
              },
            })} styles={customStyles} />
          </p>
          <p><Select style={{ color: "black !important;" }} isMulti getOptionLabel={option => option.name}
            getOptionValue={option => option._id} options={actorList} value={selectedActors} onChange={handleChangeActor} theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'hotpink',
                primary: 'lightpink',
              },
            })} styles={customStyles} /></p>
        </section>

        <section>
          <h5>Producer Detail</h5>
          <p>
            <label for="name">
              <span>Name &nbsp;  </span>
              <strong><abbr title="required"></abbr></strong>
            </label>
            <input type="text" id="name" name="name" value={producer.name} onChange={onProducerChange} />
          </p>
          <p>
            <label for="gender">
              <span>gender &nbsp; </span>
              <strong><abbr title="required"></abbr></strong>
            </label>
            <input type="text" id="gender" name="gender" value={producer.gender} onChange={onProducerChange} />
          </p>
          <p>
            <label for="bio">
              <span>Bio &nbsp; </span>
              <strong><abbr title="required"></abbr></strong>
            </label>
            <input type="text" id="bio" name="bio" value={producer.bio} onChange={onProducerChange} />
          </p>
        </section>
        <p><button type="submit">click</button></p>
      </form>

      <form onSubmit={submitDataActor}>
        <section>
          <h5>Actor Detail</h5>
          <p>
            <label for="name">
              <span>Name &nbsp;  </span>
              <strong><abbr title="required"></abbr></strong>
            </label>
            <input type="text" id="name" name="name" value={actor.name} onChange={onActorChange} />
          </p>
          <p>
            <label for="gender">
              <span>gender &nbsp; </span>
              <strong><abbr title="required"></abbr></strong>
            </label>
            <input type="text" id="gender" name="gender" value={actor.gender} onChange={onActorChange} />
          </p>
        </section>
        <p><button type="submit">Submit</button></p>
      </form>
      <div>
      {
                    newActorList.length != 0 && (
        <table>
          <tr>
            <th>
              Name
            </th>
            <th>
              Gender
            </th>

          </tr>
          {newActorList.map(item => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.gender}</td>
              </tr>
            )
          })}
        </table>)}
      </div>
      <div class="row">

      </div>

    </div>
  )
}
const customStyles = {
  option: provided => ({
    ...provided,
    color: 'black'
  }),
  control: provided => ({
    ...provided,
    color: 'black'
  }),
  singleValue: provided => ({
    ...provided,
    color: 'black'
  })
}
export default AddMovie