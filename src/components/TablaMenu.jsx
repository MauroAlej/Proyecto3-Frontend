import React from 'react'

const TablaMenu = () => {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Mail</th>
        <th>Telefono</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Samuel</td>
        <td>Lapetina</td>
        <td>Sam@gmail.com</td>
        <td>3813587825</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Mauro</td>
        <td>Juarez</td>
        <td>@gmail.com</td>
        <td>3813587825</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Mauro</td>
        <td>Juarez</td>
        <td>@gmail.com</td>
        <td>3813587825</td>
      </tr>
    </tbody>
  </Table>
  )
}

export default TablaMenu