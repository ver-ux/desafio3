import React, { useState, useEffect } from 'react';
import { getIssues } from '../api/githubAPI';
import './IssueList.css';

function IssueList()