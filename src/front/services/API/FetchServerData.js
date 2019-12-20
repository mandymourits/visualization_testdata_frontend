//TODO: IP adresses
const fetch = require('node-fetch');
import React from 'react';
import {
  getMethod,
  jsonHeader,
  defaultOptions,
  getLocationOrigin,
} from './fetchTools';
var base64 = require('base-64');

const getAllScenariosByName = async ( scenario, isTest) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'getAllScenariosByName/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getSharp = async ( scenario, isTest) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'getAllScenariosByName/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getFile = async ( filename) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'file/' + filename,
  {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  }).then(response => response.blob());

const getUniqueNames = async (url) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'getUniqueNames',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getNavItems = async ( scenario, isTest) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'getNavItems/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getFieldNames = async ( scenario, isTest) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'getFieldNames/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getFrameWork = async (url) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'getFieldNames',
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then(response => response.json());

const getById = async ( id) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'get/' + id,
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then(response => response.json());

const postScenarioData = async ( scenario, isTest) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'getFramework/' + scenario + '/' + isTest,
  {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const autoFill = async ( pageName) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'autofill/' + pageName,
  {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const postScenarioData2 = async ( data) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'create',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json());

const autoFillPageObjects = ( data) => {
  let { timeout = 500000, ...rest } = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  console.log(JSON.stringify(data));
  if (rest.signal) throw new Error('Signal not supported in timeoutable fetch');
  const controller = new AbortController();
  const { signal } = controller;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Timeout for Promise'));
      controller.abort();
    }, timeout);
    fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'autoFillPageObjects', { signal, ...rest })
      .finally(() => clearTimeout(timer))
      .then(resolve, reject);
  });
};

const createUser = async ( data) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'users',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json());

var Buffer = require('buffer/').Buffer;

const loginUser = ( userName,passWord) => fetch(
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + base64.encode(userName + ':' + passWord),
    },
  }).then(response => response.json());

const editScenario = async ( id, data) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'edit/' + id,
  {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response);

const deleteScenario = async ( data) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'delete/' + data,
  {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response);

const getAllFrameworkDataByName = async ( framework) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ 'getAllFrameworkDataByName/' + framework + '',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getFrameworkObjects = async ( frameworktype, scenario, isTest) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ frameworktype + '/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'text/plain',
    },
  }).then(response => response.text());

const getCucumberTest = async ( frameworktype, scenario, isTest) => fetch('https://virtualizationtoolbackend.herokuapp.com/'+ frameworktype + '/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'text/plain',
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
