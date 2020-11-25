import React, { useState } from 'react';
import AutoSuggestInput from './components/Autosuggest.js';
import * as king from './components/kingsImage.js';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions/actions.js';

function App() {
  const [kingsname, setkingsname] = useState("");
  const [location, setlocation] = useState("");
  const [type, settype] = useState("");
  const battle = useSelector(state => state.battle);
  const locations = useSelector(state => state.locations);
  const kings = useSelector(state => state.kings);
  const types = useSelector(state => state.types);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e;
    switch (name) {
      case 'name':
        setkingsname(value);
        break;
      case 'location':
        setlocation(value);
        break;
      case 'battle_type':
        settype(value);
        break;
      default:
        break;
    }
  };

  const createSearchData = () => {
    let search_string = "";
    if (kingsname)
      search_string += `king=${kingsname}&`;
    if (location)
      search_string += `location=${location}&`;
    if (type)
      search_string += `type=${type}`;
    console.log('search is: ', search_string);
    return search_string;
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log(kingsname, location, type);
    const search_string = createSearchData();
    dispatch(actions.fetchbattle(`https://protected-lake-39683.herokuapp.com/battles/search?${search_string}`));
  };

  const getImage = (name) => {
    switch (name) {
      case 'Balon/Euron Greyjoy':
        return king.EURON;
      case 'Joffrey/Tommen Baratheon':
        return king.TOMMEN;
      case 'Mance Rayder':
        return king.MANCE;
      case 'Renly Baratheon':
        return king.RENLY;
      case 'Robb Stark':
        return king.ROBB;
      case 'Stannis Baratheon':
        return king.STANNIS;
      default:
        break;
    }
  };
  return (
    <>
      <section className="form1 cid-form" id="form01-9">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto mbr-form" data-form-type="formoid">
              <form action="" method="" className="mbr-form form-with-styler" data-form-title="search Battles">
                <div data-for="name" className="col-lg-6 col-md-12 col-sm-12 form-group">
                  {/* <input type="text" name="name" placeholder="king's name" data-form-field="name" className="form-control" id="name" /> */}
                  <AutoSuggestInput className="form-control" name="name" id="name" placeholder="king's name" list={kings} onChange={onChange} value={kingsname} />
                </div>
                <div data-for="location" className="col-lg-6 col-md-12 col-sm-12 form-group">
                  <AutoSuggestInput name="location" placeholder="location" data-form-field="location" className="form-control" id="location" list={locations} onChange={onChange} value={location} />
                </div>
                <div data-for="battle type" className="col-lg-6 col-md-12 col-sm-12 form-group">
                  <AutoSuggestInput name="battle_type" placeholder="battle type" data-form-field="battle_type" className="form-control" list={types} value={type} onChange={onChange} id="battle_type" />
                </div>
                <div className="col-auto"><button type="submit" onClick={onSearch} className="btn btn-white display-4">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {
        Object.keys(battle).length > 0
          ?
          <section className="team2 cid-s8XcCyHzmg" id="team02-8">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 pb-4">
                  <h4 className="mbr-section-subtitle mbr-fonts-style align-left pb-3 display-7">
                    {battle.name}</h4>
                  <h3 className="mbr-section-title mbr-fonts-style align-left mb-4 display-2"><strong>{`${battle.attacker_king} gets a ${battle.attacker_outcome}`}</strong></h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-6">
                  <div className="card-wrap">
                    <div className="image-wrap">
                      {getImage(battle.attacker_king)}
                    </div>
                    <div className="content-wrap">
                      <h5 className="mbr-section-title card-title mbr-fonts-style align-left m-0 display-5">
                        {battle.attacker_king}
                      </h5>
                      <h6 className="mbr-role mbr-fonts-style align-left mb-2 display-4">ATTACKER</h6>
                      <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${battle.attacker_size > battle.defender_size ? 100 : (battle.attacker_size * 100) / battle.defender_size}%` }} aria-valuenow={battle.attacker_size > battle.defender_size ? 100 : (battle.attacker_size * 100) / battle.defender_size} aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="card-wrap">
                    <div className="image-wrap">
                      {getImage(battle.defender_king)}
                    </div>
                    <div className="content-wrap">
                      <h5 className="mbr-section-title card-title mbr-fonts-style m-0 align-left display-5">
                        {battle.defender_king}
                      </h5>
                      <h6 className="mbr-role mbr-fonts-style align-left mb-2 display-4">
                        DEFENDER</h6>
                      <div className="social-row align-left display-7">
                        <div className="progress">
                          <div className="progress-bar bg-info" role="progressbar" style={{ width: `${battle.attacker_size > battle.defender_size ? (battle.defender_size * 100) / battle.attacker_size : 100}%` }} aria-valuenow={battle.attacker_size > battle.defender_size ? (battle.defender_size * 100) / battle.attacker_size : 100} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          :
          <section className="team2 cid-s8XcCyHzmg" id="team02-8">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 pb-4">
                  <h4 className="mbr-section-subtitle mbr-fonts-style align-left pb-3 display-7">
                    Search your battles easily</h4>
                  <h3 className="mbr-section-title mbr-fonts-style align-left mb-4 display-2"><strong>In case of multiple battles, first one will be shown.</strong></h3>
                </div>
              </div>
            </div>
          </section>
      }

    </>
  );
}

export default App;
