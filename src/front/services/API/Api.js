// TODO: IP adresses
const fetch = require('node-fetch');
import React from 'react';
const ENDPOINT = process.env.ENDPOINT;

var base64 = require('base-64');

  const getAllScenariosByName = async ( scenario, isTest) => fetch(ENDPOINT + 'scenario/getAllScenariosByName/' + scenario + '/' + isTest,
    {
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getSharp = async ( scenario, isTest) => fetch(ENDPOINT + 'scenario/getAllScenariosByName/' + scenario + '/' + isTest,
    {
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getFile = async ( filename) => fetch(ENDPOINT + 'scenario/file/' + filename,
    {
      headers: {
        'mode': 'cors',
        'Content-Type': 'application/octet-stream',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.blob());

  const getUniqueNames = async (url) => fetch(ENDPOINT + 'scenario/getUniqueNames',
    {
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getNavItems = async ( scenario, isTest) => fetch(ENDPOINT + 'scenario/getNavItems/' + scenario + '/' + isTest,
    {
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getFieldNames = async ( scenario, isTest) => fetch(ENDPOINT + 'scenario/getFieldNames/' + scenario + '/' + isTest,
    {
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getFrameWork = async (url) => fetch(ENDPOINT + 'scenario/getFieldNames',
    {
      headers: {
        'mode': 'cors',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getById = async ( id) => fetch(ENDPOINT + 'scenario/get/' + id,
    {
      headers: {
        'mode': 'cors',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const postScenarioData = async ( scenario, isTest) => fetch(ENDPOINT + 'scenario/getFramework/' + scenario + '/' + isTest,
    {
      method: 'GET',
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const autoFill = async ( pageName) => fetch(ENDPOINT + 'scenario/autofill/' + pageName,
    {
      method: 'GET',
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const postScenarioData2 = async ( data) => fetch(ENDPOINT + 'scenario/create',
    {
      method: 'POST',
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
      body: JSON.stringify(data),
    }).then(response => response.json());

  const autoFillPageObjects = ( data) => {
    const { timeout = 500000, ...rest } = {
      method: 'POST',
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
      body: JSON.stringify(data),
    };
    console.log(JSON.stringify(data));
    if (rest.signal) {throw new Error('Signal not supported in timeoutable fetch');}
    const controller = new AbortController();
    const { signal } = controller;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('Timeout for Promise'));
        controller.abort();
      }, timeout);
      fetch(ENDPOINT+ 'scenario/autoFillPageObjects', { signal, ...rest })
        .finally(() => clearTimeout(timer))
        .then(resolve, reject);
    });
  };

  const createUser = async (data) => fetch(ENDPOINT + 'users',
    {
      method: 'POST',
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json());

   const loginUser = (userName, passWord) => fetch(ENDPOINT +'users'+'/token',
    {
      method: 'POST',
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const editScenario = async ( id, data) => fetch(ENDPOINT + 'scenario/edit/' + id,
    {
      method: 'PUT',
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
      body: JSON.stringify(data),
    }).then(response => response);

  const deleteScenario = async ( data) => fetch(ENDPOINT + 'scenario/delete/' + data,
    {
      method: 'DELETE',
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response);

  const getAllFrameworkDataByName = async ( framework) => fetch(ENDPOINT + 'scenario/getAllFrameworkDataByName/' + framework + '',
    {
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getFrameworkObjects = async ( frameworktype, scenario, isTest) => fetch(ENDPOINT + 'scenario/' + frameworktype + '/' + scenario + '/' + isTest,
    {
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'text/plain',
      },
    }).then(response => response.text());

  const getCucumberTest = async ( frameworktype, scenario, isTest) => fetch(ENDPOINT + 'scenario/' + frameworktype + '/' + scenario + '/' + isTest,
    {
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Content-Type': 'text/plain',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.text());

export {
  loginUser,
  createUser,
  autoFillPageObjects,
  getAllScenariosByName,
  postScenarioData,
  getUniqueNames,
  getAllFrameworkDataByName,
  getNavItems,
  getFieldNames,
  getFrameWork,
  postScenarioData2,
  deleteScenario,
  getFrameworkObjects,
  getSharp,
  getFile,
  getCucumberTest,
  editScenario,
  getById,
  autoFill,
};
