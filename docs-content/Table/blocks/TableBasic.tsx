import React from 'react';
import '../styles/style.css';

export default function TableBasic() {
  return (
    <table className='table'>
      <thead>
        <th>Name</th>
        <th>Role</th>
        <th>Team</th>
        <th></th>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className='table-col'>
              <div className='avatar avatar-rounded'></div>
              <div>
                <div>Eazy Labs</div>
                <div>@eazylabs</div>
              </div>
            </div>
          </td>
          <td>Software Engineer</td>
          <td>
            <div className='table-col'>
              <div className='badges badge-success'>Infomation</div>
              <div className='badges badge-success'>Infomation</div>
            </div>
          </td>
          <td>
            <button>Details</button>
          </td>
        </tr>
        <tr>
          <td>
            <div className='table-col'>
              <div className='avatar avatar-rounded'></div>
              <div>
                <div>Eazy Labs</div>
                <div>@eazylabs</div>
              </div>
            </div>
          </td>
          <td>Software Engineer</td>
          <td>
            <div className='table-col'>
              <div className='badges badge-success'>Infomation</div>
              <div className='badges badge-success'>Infomation</div>
            </div>
          </td>
          <td>
            <button>Details</button>
          </td>
        </tr>
        <tr>
          <td>
            <div className='table-col'>
              <div className='avatar avatar-rounded'></div>
              <div>
                <div>Eazy Labs</div>
                <div>@eazylabs</div>
              </div>
            </div>
          </td>
          <td>Software Engineer</td>
          <td>
            <div className='table-col'>
              <div className='badges badge-success'>Infomation</div>
              <div className='badges badge-success'>Infomation</div>
            </div>
          </td>
          <td>
            <button>Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
