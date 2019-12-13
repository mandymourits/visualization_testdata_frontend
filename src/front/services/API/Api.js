// TODO: IP adresses
const fetch = require('node-fetch');
import React from 'react';

var base64 = require('base-64');

  const getAllScenariosByName = async (url, scenario, isTest) => fetch(url + 'scenario/getAllScenariosByName/' + scenario + '/' + isTest,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getSharp = async (url, scenario, isTest) => fetch(url + 'scenario/getAllScenariosByName/' + scenario + '/' + isTest,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getFile = async (url, filename) => fetch(url + 'scenario/file/' + filename,
    {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.blob());

  const getUniqueNames = async (url) => fetch(url + 'scenario/getUniqueNames',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getNavItems = async (url, scenario, isTest) => fetch(url + 'scenario/getNavItems/' + scenario + '/' + isTest,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getFieldNames = async (url, scenario, isTest) => fetch(url + 'scenario/getFieldNames/' + scenario + '/' + isTest,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getFrameWork = async (url) => fetch(url + 'scenario/getFieldNames',
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getById = async (url, id) => fetch(url + 'scenario/get/' + id,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const postScenarioData = async (url, scenario, isTest) => fetch(url + 'scenario/getFramework/' + scenario + '/' + isTest,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const autoFill = async (url, pageName) => fetch(url + 'scenario/autofill/' + pageName,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const postScenarioData2 = async (url, data) => fetch(url + 'scenario/create',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
      body: JSON.stringify(data),
    }).then(response => response.json());

  const autoFillPageObjects = (url, data) => {
    const { timeout = 500000, ...rest } = {
      method: 'POST',
      headers: {
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
      fetch(url + 'scenario/autoFillPageObjects', { signal, ...rest })
        .finally(() => clearTimeout(timer))
        .then(resolve, reject);
    });
  };

  const createUser = async (url, data) => fetch(url + 'users',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json());

   const loginUser = (url, userName, passWord) => fetch(url,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const editScenario = async (url, id, data) => fetch(url + 'scenario/edit/' + id,
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
      body: JSON.stringify(data),
    }).then(response => response);

  const deleteScenario = async (url, data) => fetch(url + 'scenario/delete/' + data,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response);

  const getAllFrameworkDataByName = async (url, framework) => fetch(url + 'scenario/getAllFrameworkDataByName/' + framework + '',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD')),
      },
    }).then(response => response.json());

  const getFrameworkObjects = async (url, frameworktype, scenario, isTest) => fetch(url + 'scenario/' + frameworktype + '/' + scenario + '/' + isTest,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain',
      },
    }).then(response => response.text());

  const getCucumberTest = async (url, frameworktype, scenario, isTest) => fetch(url + 'scenario/' + frameworktype + '/' + scenario + '/' + isTest,
    {
      headers: {
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
