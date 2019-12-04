//TODO: IP adresses
const fetch = require('node-fetch');
import React from 'react';
import {
  getMethod,
  jsonHeader,
  defaultOptions,
  getLocationOrigin,
} from './fetchTools';

const getAllScenariosByName = async (url, scenario,isTest) => fetch(url + 'getAllScenariosByName/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getSharp = async (url,scenario,isTest) => fetch(url + 'getAllScenariosByName/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getFile = async (url,filename) => fetch(url + 'file/'+filename,
  {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  }).then(response => response.blob());

const getUniqueNames = async (url) => fetch(url + 'getUniqueNames',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getNavItems = async (url,scenario,isTest) => fetch(url + 'getNavItems/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getFieldNames = async (url,scenario,isTest) => fetch(url + 'getFieldNames/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getFrameWork = async (url) => fetch(url + 'getFieldNames',
  {
    headers: {
      'Access-Control-Allow-Origin':'*',
    },
  }).then(response => response.json());

const getById = async (url,id) => fetch(url + 'get/'+id,
  {
    headers: {
      'Access-Control-Allow-Origin':'*',
    },
  }).then(response => response.json());

const postScenarioData = async (url,scenario, isTest) => fetch(url + 'getFramework/' + scenario + '/' + isTest,
  {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const autoFill = async (url,pageName) => fetch(url + 'autofill/' + pageName,
  {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const postScenarioData2 = async (url,data) => fetch(url + 'create',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json());

const autoFillPageObjects = (url,data) => {
  let { timeout = 500000, ...rest } = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  console.log(JSON.stringify(data))
  if (rest.signal) throw new Error("Signal not supported in timeoutable fetch");
  const controller = new AbortController();
  const { signal } = controller;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Timeout for Promise"));
      controller.abort();
    }, timeout);
    fetch(url + 'autoFillPageObjects', { signal, ...rest })
      .finally(() => clearTimeout(timer))
      .then(resolve, reject);
  });
};

const editScenario = async (url,id, data) => fetch(url + 'edit/'+id,
  {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response);

const deleteScenario = async (url,data) => fetch(url + 'delete/' + data,
  {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response);

const getAllFrameworkDataByName = async (url,framework) => fetch(url + 'getAllFrameworkDataByName/' + framework + '',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

const getFrameworkObjects = async (url,frameworktype, scenario, isTest) => fetch(url + frameworktype + '/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'text/plain',
    },
  }).then(response => response.text());

const getCucumberTest = async (url,frameworktype, scenario, isTest) => fetch(url + frameworktype + '/' + scenario + '/' + isTest,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'text/plain',
    },
  }).then(response => response.text());


export {autoFillPageObjects,getAllScenariosByName,postScenarioData,getUniqueNames, getAllFrameworkDataByName,getNavItems,getFieldNames,getFrameWork,postScenarioData2, deleteScenario,getFrameworkObjects,getSharp,getFile,getCucumberTest,editScenario,getById,autoFill};
