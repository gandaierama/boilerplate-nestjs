import { Injectable, Param, Body, Logger } from '@nestjs/common';
import Axios from "axios";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, createConnection, getConnection } from 'typeorm';

@Injectable()
export class AppService {

	constructor(private connection: Connection) {}

	private readonly logger = new Logger(AppService.name);	

	async getWeek(): Promise <any>{
		let curr = new Date;
		let first = curr.getDate() - curr.getDay();
		let last = first + 6; 
		let firstDayW = new Date(curr.setDate(first)).toISOString().substring(0, 10);
		let lastDayW = new Date(curr.setDate(last)).toISOString().substring(0, 10);
		let res ={
		  	start_date: firstDayW,
			end_date: lastDayW
		  };
		return res;
	}

	async getMounth(): Promise <any>{
		let date = new Date();
		let firstDayM = new Date(date.getFullYear(), date.getMonth(), 1).toISOString().substring(0, 10);
		let lastDayM = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().substring(0, 10);
		let res ={
		  	start_date: firstDayM,
			end_date: lastDayM
		  };
		return res;
	}

	async arrayToList(array): Promise <any> {
	    let list = {};
	    for (let i = array.length -1; i > array[0]; i--) {
	        list += ("value:" + i + ", rest: null");
	    }
	    return list;
	}


}