import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const wrong = [];
export let wrongCount = 0;
export const guess = [];

export default function Quiz() {
	const questions = [
		{
			questionText: 'The correct class of fire extinguisher to be used on a fire with an estinguisher piece of electrical equipment, would be:',
			answerOptions: [
				{ answerText: 'Class A', isCorrect: false },
				{ answerText: 'Class B', isCorrect: false },
				{ answerText: 'Class C', isCorrect: true},
				{ answerText: 'Class D', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When using a ladder against a wall, it must be placed eith the base out how many feet for every how many feet of rise?',
			answerOptions: [
				{ answerText: '½ foot out for every 3 foot rise', isCorrect: false },
				{ answerText: '1 foot out for every 3 foot rise', isCorrect: false },
				{ answerText: '½ foot out for every 4 foot rise', isCorrect: false},
				{ answerText: '1 foot out for every 4 foot rise', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The pressure in an oxygen tank cylinder whould not exceed:',
			answerOptions: [
				{ answerText: '1200 psi', isCorrect: false },
				{ answerText: '2200 psi', isCorrect: true },
				{ answerText: '3200 psi', isCorrect: false},
				{ answerText: '4200 psi', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The pressure in an acetylene tank cylinder whould not exceed:',
			answerOptions: [
				{ answerText: '150 psi', isCorrect: false },
				{ answerText: '250 psi', isCorrect: true },
				{ answerText: '350 psi', isCorrect: false},
				{ answerText: '450 psi', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When working on any equipment (or component thereof), with the possiblity of having potential energy sources integral or nearby, what precautions must be taken?',
			answerOptions: [
				{ answerText: 'identify all live energy and potential energy sources pertaining to the equipment', isCorrect: false },
				{ answerText: 'isolate all energy sources related to the equipment', isCorrect: false },
				{ answerText: 'lock out and tag all electrical energy sources related to the equipment', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		 {
			questionText: 'When using pil pumped nitrogen in refridgeration service/installation, what must be considered?',
			answerOptions: [
				{ answerText: 'the use of a manifold gauge set to control nitrogen pressures', isCorrect: false },
				{ answerText: 'the use of a pressure relief valve', isCorrect: false },
				{ answerText: 'the use of a pressure regulator between the cylinder and the system', isCorrect: true},
				{ answerText: 'the use of an apprentice to carry the cylinder', isCorrect: false},
			 ],
		  },
		  
		  {
			questionText: 'When cleaning the water side of a shell and coil type heat exchanger, the appropriate method used is to use:',
			answerOptions: [
				{ answerText: 'inhibited acids', isCorrect: true },
				{ answerText: 'acids', isCorrect: false },
				{ answerText: 'stell brushes', isCorrect: false},
				{ answerText: 'calcium chloride', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'What device(s) is/are required in a machine room using a refridgerent having an ASHRAE "B" rating?',
			answerOptions: [
				{ answerText: 'oxygen deprivation sensor', isCorrect: false },
				{ answerText: 'refrigerant analyzer/monitor', isCorrect: false },
				{ answerText: 'access to a self contained breathing apparatus', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A refrigerant having an "A2" ASHRAE designation, is said to be:',
			answerOptions: [
				{ answerText: 'non-toxic', isCorrect: false },
				{ answerText: 'non-flammable', isCorrect: false },
				{ answerText: 'flammable and toxic', isCorrect: false},
				{ answerText: 'nan', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Rooftop air conditioning equipment, according to CSA B-52, shall be what distance from the roof edge:',
			answerOptions: [
				{ answerText: '6 feet', isCorrect: false },
				{ answerText: '8 feet', isCorrect: false },
				{ answerText: '10 feet', isCorrect: true},
				{ answerText: '12 feet', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Refrigeration system components located within air ducts shall be constructed to withstand temperature of:',
			answerOptions: [
				{ answerText: '400°F', isCorrect: false },
				{ answerText: '700°F', isCorrect: false },
				{ answerText: '800°F', isCorrect: true},
				{ answerText: '1,000°F', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Combustion equipment may be located within the same machinery room as refrigerent containing equipment, providing:',
			answerOptions: [
				{ answerText: 'combustion air is provided from outside through a sealed duct', isCorrect: false },
				{ answerText: 'in the event of a refrigerant leak the combustion process is automatically shutdown', isCorrect: false },
				{ answerText: 'you are not permitted to locate combustion equipment within the same machinery room as refrigerant containing equipment', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The maximum field test pressure(s) for a refrigerent ssytem shall be not less than the lower of:',
			answerOptions: [
				{ answerText: 'the high and low side design pressures', isCorrect: false },
				{ answerText: 'the pressure setting of the high side pressure relief device', isCorrect: false },
				{ answerText: 'the pressure setting of the low side pressure relief device', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A refrigerant system considered as a high leakage probability is:',
			answerOptions: [
				{ answerText: 'a direct system', isCorrect: false },
				{ answerText: 'an indirect open spray system', isCorrect: false },
				{ answerText: 'one which any refrigerant containing part is located within the air stream', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The immediate safety concern with all refigerants is:',
			answerOptions: [
				{ answerText: 'oxygen deprivation sensortoxicity', isCorrect: false },
				{ answerText: 'flammability', isCorrect: false },
				{ answerText: 'all of the above', isCorrect: false},
				{ answerText: 'nan', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Refrogerants, when exposed to flame, will produce:',
			answerOptions: [
				{ answerText: 'sludge', isCorrect: false },
				{ answerText: 'toxic vapours', isCorrect: true },
				{ answerText: 'plasma', isCorrect: false},
				{ answerText: 'NaCl', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Relief valves are required:',
			answerOptions: [
				{ answerText: 'on all equipment', isCorrect: false },
				{ answerText: 'on receivers', isCorrect: false },
				{ answerText: 'plasma', isCorrect: false},
				{ answerText: 'NaCl', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The size of the relief valve is based upon:',
			answerOptions: [
				{ answerText: 'system pressure', isCorrect: false },
				{ answerText: 'pipe size', isCorrect: false },
				{ answerText: 'volume of refrigerent', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The purpose of the fire valve within an ammonia machinery room, is to:',
			answerOptions: [
				{ answerText: 'put out a fire', isCorrect: false },
				{ answerText: 'to release the ammonia from the system in the event of a fire', isCorrect: true },
				{ answerText: 'to relieve evaporator pressure in the event of a fire', isCorrect: false},
				{ answerText: 'burn off the ammonia', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Fan and drive pulleys or sheaves must be:',
			answerOptions: [
				{ answerText: 'of equal face diameter', isCorrect: false },
				{ answerText: 'aligned straight, square and parallel', isCorrect: true },
				{ answerText: 'aligned with a straight edge', isCorrect: false},
				{ answerText: 'parallel to each other', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Drive belt(s) shall:',
			answerOptions: [
				{ answerText: 'be replaced on a regular basis, regardless of condition', isCorrect: false },
				{ answerText: 'be installed with the belt riding on the bottom of the pulley', isCorrect: false },
				{ answerText: 'be installed with the belt riding within the pulley', isCorrect: false},
				{ answerText: 'be installed with the belt riding flush to the top of the pulley and not riding on the bottom of the pulley', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'When replacing a broken belt on a multigroove pulley or sheave:',
			answerOptions: [
				{ answerText: 'replace the belt with a cogged style belt', isCorrect: false },
				{ answerText: 'replace only the worn belts', isCorrect: false },
				{ answerText: 'replace all of the belts with a matched set or powerband', isCorrect: true},
				{ answerText: 'replace all the belts and drive pulleys', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Compressor/motor coupling alignment:',
			answerOptions: [
				{ answerText: 'must be within .001" runout', isCorrect: false },
				{ answerText: 'have a maximum total indicated runout of .001" per inch of coupling diameter', isCorrect: false },
				{ answerText: 'have a cold run check performed', isCorrect: false},
				{ answerText: 'b & c', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'When preforming a shaft alignment with a dial indicator:',
			answerOptions: [
				{ answerText: 'the dial indicator must be zeroed', isCorrect: false },
				{ answerText: 'the dial indicator must be set in the mid position', isCorrect: false },
				{ answerText: 'nan', isCorrect: false},
				{ answerText: 'first c, then a', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The amount a motor needs to be risen for a coupling alignment is determined by:',
			answerOptions: [
				{ answerText: 'take a reading at the top of the coupling, take a reading at the bottom of the coupling, the difference is the amount to raise the motor', isCorrect: false },
				{ answerText: 'take a reading at the top of the coupling and at the bottom of the coupling, the difference divided by 4 is the amount to raise the motor', isCorrect: false },
				{ answerText: 'take a reading at the top of the coupling and at the bottom of the coupling, the difference times two is the amount to raise the motor', isCorrect: false},
				{ answerText: 'take a reading at the top of the coupling and at the bottom of the coupling, the difference divided by two is the amount to raise the motor', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The correct rod support size for a 2" pipe is:',
			answerOptions: [
				{ answerText: '3/8" grade 2', isCorrect: true },
				{ answerText: '3/8" grade 5', isCorrect: false },
				{ answerText: '1/4" grade 2', isCorrect: false},
				{ answerText: '1/4" grade 5', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A 2 pole motor having a motor slip of 150, has a 5" sheave. The fan is required to turn at 2800 rpm, the fan pulley is sized at:',
			answerOptions: [
				{ answerText: '6.16"', isCorrect: true },
				{ answerText: '6.43"', isCorrect: false },
				{ answerText: '3.89"', isCorrect: false},
				{ answerText: '4.06"', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The replacement belt for a 1/2" A -38 belt is a: ',
			answerOptions: [
				{ answerText: 'SL - 380 belt', isCorrect: false },
				{ answerText: 'SL-400 belt', isCorrect: false },
				{ answerText: '4L - 380 belt', isCorrect: false},
				{ answerText: '4L - 400 belt', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The instrument used for measuring air flow is:',
			answerOptions: [
				{ answerText: 'the anemometer', isCorrect: true },
				{ answerText: 'the hygrometer', isCorrect: false },
				{ answerText: 'the hydrometer', isCorrect: false},
				{ answerText: 'the flowmometer', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The instrument used for measuring humidity is:',
			answerOptions: [
				{ answerText: 'the humidor', isCorrect: false },
				{ answerText: 'the hygrometer', isCorrect: true },
				{ answerText: 'the hydrometer', isCorrect: false},
				{ answerText: 'the anemometer', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The instrument used for determining wet bulb depression is:',
			answerOptions: [
				{ answerText: 'the psychrometer', isCorrect: true },
				{ answerText: 'the hygrometer', isCorrect: false },
				{ answerText: 'the hydrometer', isCorrect: false},
				{ answerText: 'the dry bulb thermometer', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The method for leak checking an ammonia system is:',
			answerOptions: [
				{ answerText: 'a sulphide stick', isCorrect: false },
				{ answerText: 'litmus paper', isCorrect: false },
				{ answerText: 'a halide leak detector', isCorrect: false},
				{ answerText: 'a &b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The acceptable method(s) for leak checking a halogenated fluorocarbon, is:',
			answerOptions: [
				{ answerText: 'halide leak detector', isCorrect: false },
				{ answerText: 'soap bubbles', isCorrect: false },
				{ answerText: 'electronic leak detector', isCorrect: false},
				{ answerText: 'b and c', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Velocity pressure is measured by:',
			answerOptions: [
				{ answerText: 'inserting an impact tube away from the direction of flow', isCorrect: false },
				{ answerText: 'subtracting total pressure from static pressure', isCorrect: false },
				{ answerText: 'subtracting static pressure from total pressure', isCorrect: true},
				{ answerText: 'adding static pressure plus total pressure', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'An ammeter measures current by:',
			answerOptions: [
				{ answerText: 'connecting the meter in series with the load', isCorrect: true },
				{ answerText: 'connecting the meter in parallel with the load', isCorrect: false },
				{ answerText: 'connecting the meter in series/parallel with the load', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A volt meter measures voltage by:',
			answerOptions: [
				{ answerText: 'connecting the meter leads in series with the load', isCorrect: false },
				{ answerText: 'connecting the meter leads in parallel with the load', isCorrect: true },
				{ answerText: 'connecting the meter leads in series/parallel with the load', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When using a voltmeter to verify no voltage present, the procedure for checking is as follows:',
			answerOptions: [
				{ answerText: 'using fused leads check for voltage at equipment terminal block', isCorrect: false },
				{ answerText: 'using fused leads check for voltage at known source, verify voltage present', isCorrect: false },
				{ answerText: 'using fused leads check for zero voltage at terminal block', isCorrect: false},
				{ answerText: '"b" then "c" then "b"', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'When using an ohmmeter ensure that:',
			answerOptions: [
				{ answerText: 'no power is present', isCorrect: false },
				{ answerText: 'the load is isolated', isCorrect: false },
				{ answerText: 'the load is not isolated', isCorrect: false},
				{ answerText: 'a &b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The device used for measuring a deep vacuum is the:',
			answerOptions: [
				{ answerText: 'manifold vacuum gauge set', isCorrect: false },
				{ answerText: 'electronic thermistor vacuum gauge', isCorrect: true },
				{ answerText: 'penbarthy pump gauge', isCorrect: false},
				{ answerText: 'meggohmeter', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The micron is equal to:',
			answerOptions: [
				{ answerText: '1000000', isCorrect: false },
				{ answerText: '1/100,000 of a meter', isCorrect: false },
				{ answerText: '1/1,000,000 of an inch', isCorrect: false},
				{ answerText: '1/25,400 of an inch', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'When testing a compressor motor winding, using an wiring isulation tester (meggohmeter), what precaution(s) must be taken?',
			answerOptions: [
				{ answerText: 'compressor in a deep vacuum', isCorrect: false },
				{ answerText: 'appropriate voltage setting on megger', isCorrect: false },
				{ answerText: 'compressor not in a deep vacuum', isCorrect: false},
				{ answerText: 'b and "c"', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The number of ohms in a megohm is:',
			answerOptions: [
				{ answerText: '1/1,000,000', isCorrect: false },
				{ answerText: '100000', isCorrect: false },
				{ answerText: '1/100,000', isCorrect: false},
				{ answerText: '1000000', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Piping supports shall be a maximum of every:',
			answerOptions: [
				{ answerText: '6\'', isCorrect: false },
				{ answerText: '8\'', isCorrect: false },
				{ answerText: '10\'', isCorrect: true},
				{ answerText: '12\'', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Vibration absorbers:',
			answerOptions: [
				{ answerText: 'are installed at right angles to the source of vibration', isCorrect: true },
				{ answerText: 'have the same pressure rating regardless of pipe diameter', isCorrect: false },
				{ answerText: 'are fastened at the end closest to the source of vibration', isCorrect: false},
				{ answerText: 'are fastened with supports at both ends', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Horizontal refrigerant vapour piping is sloped:',
			answerOptions: [
				{ answerText: '¼" for every 10 ft', isCorrect: false },
				{ answerText: '½" for every 10 ft', isCorrect: true },
				{ answerText: '¾" for every 10 ft', isCorrect: false},
				{ answerText: 'I" for every 10 ft', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Horizontal refrigerant vapour piping is sloped:',
			answerOptions: [
				{ answerText: 'in the direction of flow', isCorrect: true },
				{ answerText: 'parallel to the roof line', isCorrect: false },
				{ answerText: 'towards the compressor in the discharge line', isCorrect: false},
				{ answerText: 'away from the compressor in the suction line', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The type of pipe used for high pressure ammonia is:',
			answerOptions: [
				{ answerText: 'ACR copper', isCorrect: false },
				{ answerText: 'Polypropylene', isCorrect: false },
				{ answerText: 'Black iron schedule 80', isCorrect: true},
				{ answerText: 'High pressure tygon', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The minimum gas velocity in a horizontal refrigeration line is:',
			answerOptions: [
				{ answerText: '400 fpm', isCorrect: false },
				{ answerText: '500 fpm', isCorrect: true },
				{ answerText: '600 fpm', isCorrect: false},
				{ answerText: '700 fpm', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The minimum gas velocity in a gas riser is:',
			answerOptions: [
				{ answerText: '500 fpm', isCorrect: false },
				{ answerText: '800 fpm', isCorrect: false },
				{ answerText: '1000 fpm', isCorrect: true},
				{ answerText: '1400 fpm', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The maximum gas velocity in a gas line is:',
			answerOptions: [
				{ answerText: '4000 fpm', isCorrect: true },
				{ answerText: '3000 fpm', isCorrect: false },
				{ answerText: '2500 fpm', isCorrect: false},
				{ answerText: '2000 fpm', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'An expansion loop in a horizontal run is required every:',
			answerOptions: [
				{ answerText: '50 ft', isCorrect: false },
				{ answerText: '66 ft', isCorrect: false },
				{ answerText: '100 ft', isCorrect: true},
				{ answerText: '120 ft', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The maximum pressure drop in a gas line should not exceed:',
			answerOptions: [
				{ answerText: '2 psid', isCorrect: false },
				{ answerText: '1 psid', isCorrect: false },
				{ answerText: '2° F equivalent pressure drop', isCorrect: true},
				{ answerText: '1° F equivalent pressure drop', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Copper piping will expand _______, per 100°F difference',
			answerOptions: [
				{ answerText: '1 1/8" per 100 feet', isCorrect: true },
				{ answerText: '1 1/2" per 100 feet', isCorrect: false },
				{ answerText: '1 3/8" per 100 feet', isCorrect: false},
				{ answerText: '1 5/8" per 100 feet', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The type of tube used for halogenated fluorocarbon refrigerants is:',
			answerOptions: [
				{ answerText: 'type "M" nitrogenized', isCorrect: false },
				{ answerText: 'type "K"', isCorrect: false },
				{ answerText: 'type "L" nitrogenized', isCorrect: true},
				{ answerText: 'type "G\'', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The Pantone Matching System (PMS) for ACR tubing is:',
			answerOptions: [
				{ answerText: 'yellow', isCorrect: false },
				{ answerText: 'white', isCorrect: false },
				{ answerText: 'blue', isCorrect: true},
				{ answerText: 'red', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The PMS for ammonia piping is:',
			answerOptions: [
				{ answerText: 'yellow', isCorrect: false },
				{ answerText: 'silver/white', isCorrect: true },
				{ answerText: 'blue', isCorrect: false},
				{ answerText: 'red', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When penetrating a wall with piping, what is required?',
			answerOptions: [
				{ answerText: 'insulation', isCorrect: false },
				{ answerText: 'separate holes for discharge and suction lines', isCorrect: false },
				{ answerText: 'nothing', isCorrect: false},
				{ answerText: 'a non-galvanic sleeve', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'When running piping through a public passageway:',
			answerOptions: [
				{ answerText: 'the minimum distance from the floor is 7.5\'', isCorrect: true },
				{ answerText: 'the maximum distance from the floor is 7.5\'', isCorrect: false },
				{ answerText: 'height doesn\'t matter', isCorrect: false},
				{ answerText: 'the pipe must be insulated', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Regarding Refrigeration piping the minimum brazing temperature is:',
			answerOptions: [
				{ answerText: '600°F', isCorrect: false },
				{ answerText: '800°F', isCorrect: false },
				{ answerText: '900°F', isCorrect: false},
				{ answerText: '1000°F', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Moisture on a suction line is the result of:',
			answerOptions: [
				{ answerText: 'inadequate insulation on the suction line', isCorrect: false },
				{ answerText: 'the suction line temperature is lower than the ambient dewpoint', isCorrect: false },
				{ answerText: 'the suction line dewpoint is lower than the ambient relative humidity', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A double suction riser is required for:',
			answerOptions: [
				{ answerText: 'oil entrainment at full capacity load', isCorrect: false },
				{ answerText: 'oil entrainmost at minimum capacity load', isCorrect: true },
				{ answerText: 'to reduce pressure drop in the riser', isCorrect: false},
				{ answerText: 'liquid refrigerant entrainment during low capacity load', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A double discharge line is used with a single compressor:',
			answerOptions: [
				{ answerText: 'to reduce pressure drop in the riser to the condenser above the compressor', isCorrect: false },
				{ answerText: 'to ensure no liquid refrigerant retums to compressor head at shutdown', isCorrect: false },
				{ answerText: 'when the compressor has capacity control and the condenser is above the compressor', isCorrect: true},
				{ answerText: 'when the compressor has capacity control and the condenser is below the compressor', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'To facilitate oil return to a compressor, determine what piping practice is used:',
			answerOptions: [
				{ answerText: 'double risers are used for low load conditions', isCorrect: false },
				{ answerText: 'diameter reduction of vertical gas risers', isCorrect: false },
				{ answerText: 'base or "p" traps are used', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Then two evaporators are piped in parallel, with one evaporator above the other, the lead evaporator is:',
			answerOptions: [
				{ answerText: 'the lower evaporator', isCorrect: true },
				{ answerText: 'the upper evaporator', isCorrect: false },
				{ answerText: 'neither evaporator', isCorrect: false},
				{ answerText: 'a & b', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When using multiple evaporators, having a common suction line, overhead:',
			answerOptions: [
				{ answerText: 'the evaporator pipes are connected to the bottom of the suction line', isCorrect: false },
				{ answerText: 'the evaporator pipes are connected in the side of the suction line', isCorrect: false },
				{ answerText: 'the evaporator lines are connected in to the top of the suction line', isCorrect: true},
				{ answerText: 'the use of inverted traps are not required', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Inverted traps are used to:',
			answerOptions: [
				{ answerText: 'reduce oil migration to an off cycle evaporator', isCorrect: false },
				{ answerText: 'minimize liquid refrigerant migration during off cycle', isCorrect: false },
				{ answerText: 'allow for inverse flow', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The branch of a 1/2" x 5/8" x 3/8" tee, is:',
			answerOptions: [
				{ answerText: '1/2"', isCorrect: false },
				{ answerText: '5/8"', isCorrect: false },
				{ answerText: '1/4"', isCorrect: false},
				{ answerText: '3/8"', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'An evaporator is located 10\' below a condensing unit:',
			answerOptions: [
				{ answerText: 'the suction line remains unchanged', isCorrect: false },
				{ answerText: 'the horizontal line will need to be smaller in diameter than the riser', isCorrect: false },
				{ answerText: 'the riser will need to be a smaller diameter than the horizontal line', isCorrect: true},
				{ answerText: 'the suction line will be need to be oversized', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A hot gas muffler is installed:',
			answerOptions: [
				{ answerText: 'in a horizontal line', isCorrect: false },
				{ answerText: 'in a vertical line', isCorrect: false },
				{ answerText: 'in any position', isCorrect: false},
				{ answerText: 'to avoid oil trapping', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Metal oxides are avoided in refrigeration systems:',
			answerOptions: [
				{ answerText: 'a) by purging with nitrogen or an inert gas when brazing', isCorrect: true },
				{ answerText: 'by sweeping with air', isCorrect: false },
				{ answerText: 'by using oxygen', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Silver Brazing alloy has a flow point of:',
			answerOptions: [
				{ answerText: '950°F', isCorrect: false },
				{ answerText: '1,050°F', isCorrect: false },
				{ answerText: '800°F', isCorrect: false},
				{ answerText: '1,450°F', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A vertical gas riser of 60 feet height, would have how many traps?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '3', isCorrect: true},
				{ answerText: '2', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'For question #81, after the first trap. there would be a trap located every how many feet?',
			answerOptions: [
				{ answerText: '30', isCorrect: false },
				{ answerText: '20', isCorrect: true },
				{ answerText: '15', isCorrect: false},
				{ answerText: '10', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A horizontal refrigerant line of 60 feet in length, should:',
			answerOptions: [
				{ answerText: 'have vibration eliminated', isCorrect: false },
				{ answerText: 'have a "P" trap', isCorrect: false },
				{ answerText: 'have an expansion loop', isCorrect: false},
				{ answerText: 'be properly supported with rubber grommets', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Which of the following materials is not compatible with ammonia?',
			answerOptions: [
				{ answerText: 'black iron', isCorrect: false },
				{ answerText: 'aluminium', isCorrect: false },
				{ answerText: 'copper', isCorrect: true},
				{ answerText: 'stainless steel', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Parallel evaporators when stacked one above the other, the lead evaporator is:',
			answerOptions: [
				{ answerText: 'the upper', isCorrect: false },
				{ answerText: 'the lower', isCorrect: true },
				{ answerText: 'does not matter', isCorrect: false},
				{ answerText: 'the middle evaporator', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Upon completion of brazing a copper to steel connection, you must:',
			answerOptions: [
				{ answerText: 'cool the joint down with ice water', isCorrect: false },
				{ answerText: 'remove all excess silver', isCorrect: false },
				{ answerText: 'remove all excess flux to avoid corrosion', isCorrect: true},
				{ answerText: 'begin flushing with nitrogen', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The ideal location for locating the liquid/moisture indicator is:',
			answerOptions: [
				{ answerText: 'after the filter drier before the liquid control valve', isCorrect: true },
				{ answerText: 'mid way in the liquid line', isCorrect: false },
				{ answerText: 'before the strainer drier', isCorrect: false},
				{ answerText: 'at the receiver outlet', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Vibration eliminators should be installed:',
			answerOptions: [
				{ answerText: 'at right angles to the source of vibration', isCorrect: false },
				{ answerText: 'parallel to the source of vibration', isCorrect: false },
				{ answerText: 'parallel to the crankshaf.', isCorrect: false},
				{ answerText: '"a" & "c"', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The preferred mechanical brass forged fatening nut is:',
			answerOptions: [
				{ answerText: 'short forged flare', isCorrect: true },
				{ answerText: 'long forged flare', isCorrect: false },
				{ answerText: 'short forged fpt', isCorrect: false},
				{ answerText: 'long forged fpt', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Define orthographic drawing',
			answerOptions: [
				{ answerText: '3 D drawing, show all sides in perspective 30°/60°', isCorrect: false },
				{ answerText: 'shows up to S sides single dimension', isCorrect: true },
				{ answerText: '3D front side proper dimension, sides out of perspective', isCorrect: false},
				{ answerText: '3D drawing showing only important items', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Define oblique drawing',
			answerOptions: [
				{ answerText: '3 D drawing, show all sides in perspective 30°/60°', isCorrect: false },
				{ answerText: 'shows up to S sides single dimension', isCorrect: false },
				{ answerText: '3D front side proper dimension, sides out of perspective', isCorrect: true},
				{ answerText: '3D drawing showing only important items', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Define Isometric drawing',
			answerOptions: [
				{ answerText: '3 D drawing, show all sides in perspective 30°/60°', isCorrect: true },
				{ answerText: 'shows up to S sides single dimension', isCorrect: false },
				{ answerText: '3D front side proper dimension, sides out of perspective', isCorrect: false},
				{ answerText: '3D drawing showing only important items', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The top view of a drawing is also referred as',
			answerOptions: [
				{ answerText: 'arial view', isCorrect: false },
				{ answerText: 'plan', isCorrect: true },
				{ answerText: 'directional view', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When compressors are piped in parallel or tandem:',
			answerOptions: [
				{ answerText: 'a suction line equalizing line is required', isCorrect: false },
				{ answerText: 'an inverted trap is required', isCorrect: false },
				{ answerText: 'a base trap is required', isCorrect: false},
				{ answerText: 'a crankcase pressure equalizing line is required', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The unloading steps for a 6 cylinder compressor are:',
			answerOptions: [
				{ answerText: '100%, 75%, 50%, 0%', isCorrect: false },
				{ answerText: '100%, 66.7%, 33.3%, 0%', isCorrect: true },
				{ answerText: '100%, 75%, 50%, 25%, 0%', isCorrect: false},
				{ answerText: '100%, 50%, 0%', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The centrifugal compressor:',
			answerOptions: [
				{ answerText: 'converts static pressure to velocity pressure to static pressure', isCorrect: false },
				{ answerText: 'may be subject to refrigerant flow revers al under excessively high discharge pressure conditions', isCorrect: false },
				{ answerText: 'may be subject to refrigerant flow reversal under excessively low suction pressure conditions', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A compressor has a discharge pressure of 250 psig and a suction pressure of 35 psig, the compression ratio is:',
			answerOptions: [
				{ answerText: '5.3 : 1', isCorrect: true },
				{ answerText: '5.0 : 1', isCorrect: false },
				{ answerText: '4.0 : 1', isCorrect: false},
				{ answerText: '6.7 : 1', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The method of capacity control in a centrifugal compressor is:',
			answerOptions: [
				{ answerText: 'low side float', isCorrect: false },
				{ answerText: 'demand limiting', isCorrect: false },
				{ answerText: 'reverse osmosis', isCorrect: false},
				{ answerText: 'inlet guide vanes', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Before a centrifugal chiller compressor may start, what must occur?',
			answerOptions: [
				{ answerText: 'adequate water flow through the condenser', isCorrect: false },
				{ answerText: 'adequate water flow through the chiller barrel', isCorrect: false },
				{ answerText: 'oil pump motor running', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Safety heads in compressors are:',
			answerOptions: [
				{ answerText: 'coil spring backed', isCorrect: false },
				{ answerText: 'used with ring type discharge valves', isCorrect: false },
				{ answerText: 'used to protect the compressor from liquid slugging', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Compressor capacity control:',
			answerOptions: [
				{ answerText: 'keeps the compressor running', isCorrect: false },
				{ answerText: 'reduces short cycling', isCorrect: false },
				{ answerText: 'increases temperature swings', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Net oil pressure for a compressor is:',
			answerOptions: [
				{ answerText: 'oil pump discharge pressure plus sump pressure', isCorrect: false },
				{ answerText: 'oil pump discharge pressure plus discharge pressure', isCorrect: false },
				{ answerText: 'oil pump discharge pressure less crankcase pressure', isCorrect: true},
				{ answerText: 'dis charge pressure less oil pump discharge pressure', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The scroll type of compressor has:',
			answerOptions: [
				{ answerText: 'no valves', isCorrect: true },
				{ answerText: 'a discharge check valve', isCorrect: false },
				{ answerText: 'a suction reed valve', isCorrect: false},
				{ answerText: 'suction and discharge ring valves', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'If a compressor has cast iron pistons, will it need rings?',
			answerOptions: [
				{ answerText: 'yes, due to thermal expansion', isCorrect: false },
				{ answerText: 'no, as it will expand equally with the compressor casting', isCorrect: true },
				{ answerText: 'yes, because the aluminum will melt', isCorrect: false},
				{ answerText: 'no, because the aluminum will expand at the same rate', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When a centrifugal chiller surges:',
			answerOptions: [
				{ answerText: 'the low side pressure tries to go into the high side', isCorrect: false },
				{ answerText: 'the intermediate pressure tries to go into the high side', isCorrect: false },
				{ answerText: 'there is a reversal of refrigerant flow', isCorrect: true},
				{ answerText: 'the bearing radial load becomes excessive', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Which statement is true?',
			answerOptions: [
				{ answerText: 'centrifugal compressors are positive displacement', isCorrect: false },
				{ answerText: 'reciprocating compressors are non-positive displacement', isCorrect: false },
				{ answerText: 'reciprocating compressors are positive displacement', isCorrect: true},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When compressors are stacked one above the other, having common discharge and suction lines:',
			answerOptions: [
				{ answerText: 'the top compressor is the lead', isCorrect: false },
				{ answerText: 'the bottom compressor is the lead', isCorrect: false },
				{ answerText: 'both compressors must be energized at the same time and run congruently', isCorrect: true},
				{ answerText: 'the lead lag sequence is irrelevant', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A burned out crankcase heater may result in:',
			answerOptions: [
				{ answerText: 'compressor slugging', isCorrect: false },
				{ answerText: 'damaged bearings', isCorrect: false },
				{ answerText: 'damaged valves', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Refrigerant shortage will result in:',
			answerOptions: [
				{ answerText: 'motor over heating', isCorrect: false },
				{ answerText: 'poor oil return', isCorrect: false },
				{ answerText: 'insufficient cooling', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Which of the following is not a method of capacity control?',
			answerOptions: [
				{ answerText: 'hot gas bypass, suction line feed', isCorrect: false },
				{ answerText: 'cylinder unloading', isCorrect: false },
				{ answerText: 'hot gas defrost', isCorrect: true},
				{ answerText: 'hot gas bypass, evaporator feed', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A water valve in the makeup line to an evaporative condenser is turned off.',
			answerOptions: [
				{ answerText: 'the compressor fails', isCorrect: true },
				{ answerText: 'low suction pressure results', isCorrect: false },
				{ answerText: 'low discharge pressure results', isCorrect: false},
				{ answerText: 'condenser fan fails', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Pressure testing of a system may be accomplished using:',
			answerOptions: [
				{ answerText: 'air', isCorrect: false },
				{ answerText: 'refrigerant', isCorrect: false },
				{ answerText: 'oxygen', isCorrect: false},
				{ answerText: 'nitrogen', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Off-cycle refrigerant migration to a compressor may be reduced by:',
			answerOptions: [
				{ answerText: 'pump down', isCorrect: false },
				{ answerText: 'inverted traps or loops', isCorrect: false },
				{ answerText: 'crankcase beater', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Compressor oil analysis:',
			answerOptions: [
				{ answerText: 'provides acid levels', isCorrect: false },
				{ answerText: 'provides moisture content', isCorrect: false },
				{ answerText: 'provides metal particle content', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Compressor capacity:',
			answerOptions: [
				{ answerText: 'increases with a decrease in suction pressure.', isCorrect: false },
				{ answerText: 'decreases with a decrease in suction pressure', isCorrect: true },
				{ answerText: 'decreases with an increase in suction pressure', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When the air flow across an evaporator is reduced:',
			answerOptions: [
				{ answerText: 'the refrigerant density is increased', isCorrect: true },
				{ answerText: 'the refrigerant specific volume is decreased', isCorrect: false },
				{ answerText: 'the refrigerant density is decreased', isCorrect: false},
				{ answerText: 'the refrigerant pressure is increased', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'If the evaporator "fin surface" area is increased and air flow is unchanged:',
			answerOptions: [
				{ answerText: 'the space humidity will increase', isCorrect: false },
				{ answerText: 'the space humidity will decrease', isCorrect: true },
				{ answerText: 'the space humidity will be unchanged', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Excessively superheated gas returning to the compressor:',
			answerOptions: [
				{ answerText: 'is normal', isCorrect: false },
				{ answerText: 'results in excessive oil return', isCorrect: false },
				{ answerText: 'may cause flashing in the compressor sump', isCorrect: false},
				{ answerText: 'may cause compressor overheating and failure', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'System efficiencies are based on:',
			answerOptions: [
				{ answerText: 'EER ratios', isCorrect: false },
				{ answerText: 'SEER ratios', isCorrect: false },
				{ answerText: 'Compression ratios', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The EER (energy efficiency ratio)of a 2 ½ ton air conditioning system and a measured voltage of 240 volts and measured amperage of 12 amps is:',
			answerOptions: [
				{ answerText: '8.4', isCorrect: false },
				{ answerText: '9.4', isCorrect: false },
				{ answerText: '10.4', isCorrect: true},
				{ answerText: '11.4', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'To recycle refrigerant in a system, it requires:',
			answerOptions: [
				{ answerText: 'removal and return to system, unchanged', isCorrect: false },
				{ answerText: 'removal, filter, dry, distill oil and return to system', isCorrect: true },
				{ answerText: 'removal return to ARI standards and return to system', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'To reclaim refrigerant in a system, it requires:',
			answerOptions: [
				{ answerText: 'Recovery, and return to system unchanged', isCorrect: false },
				{ answerText: 'Recovery, filter, dry, distill oil and return to system', isCorrect: false },
				{ answerText: 'Recovery, return to ARI standards and return to \'system', isCorrect: true},
				{ answerText: 'None of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'ln a lithium bromide absorption system, the refrigerant is:',
			answerOptions: [
				{ answerText: 'lithium bromide', isCorrect: false },
				{ answerText: 'ammonia', isCorrect: false },
				{ answerText: 'water', isCorrect: true},
				{ answerText: 'bromide', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The greatest amount of superheat in a system is found in the:',
			answerOptions: [
				{ answerText: 'evaporator and suction line', isCorrect: false },
				{ answerText: 'compressor and discharge line', isCorrect: true },
				{ answerText: 'condenser/receiver', isCorrect: false},
				{ answerText: 'suction line', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'An internal leak in a reversing valve may be determined by:',
			answerOptions: [
				{ answerText: 'high discharge and suction pressures', isCorrect: false },
				{ answerText: 'high discharge and low suction pressures', isCorrect: false },
				{ answerText: 'high suction and low discharge pressures', isCorrect: true},
				{ answerText: 'low discharge and low suction pressures', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'An excessively low suction pressure will',
			answerOptions: [
				{ answerText: 'cause a compressor to overheat', isCorrect: true },
				{ answerText: 'cause very low discharge temperatures', isCorrect: false },
				{ answerText: 'cause flashing in the sump', isCorrect: false},
				{ answerText: 'increase oil return to the compressor', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'If the evaporator were dirty in a capillary tube system you would expect:',
			answerOptions: [
				{ answerText: 'low suction and high head', isCorrect: false },
				{ answerText: 'low suction and low head', isCorrect: true },
				{ answerText: 'high suction and high head', isCorrect: false},
				{ answerText: 'high suction and low head', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'In order to charge using the superheat method, you require the:',
			answerOptions: [
				{ answerText: 'outside DB and indoor DB', isCorrect: false },
				{ answerText: 'outside DB and indoor WB', isCorrect: true },
				{ answerText: 'outside WB and indoor DB', isCorrect: false},
				{ answerText: 'outside WB and indoor WB', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Non-condensibles are detected in a system by:',
			answerOptions: [
				{ answerText: 'Dalton\'s law of partial pressures', isCorrect: false },
				{ answerText: 'High head pressure and extremely high discharge temperatures', isCorrect: false },
				{ answerText: 'High current draw', isCorrect: false},
				{ answerText: 'All of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The liquid recirculating pump in an ammonia system:',
			answerOptions: [
				{ answerText: 'pumps from the evaporator to the generator', isCorrect: false },
				{ answerText: 'pumps from the low side receiver to the high side receiver', isCorrect: false },
				{ answerText: 'pumps from the low pressure receiver to the evaporator', isCorrect: true},
				{ answerText: 'pumps from the receiver to the expansion valve', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'An external equalizing line is used:',
			answerOptions: [
				{ answerText: 'with a TEV and a distributor', isCorrect: true },
				{ answerText: 'with a capillary tube', isCorrect: false },
				{ answerText: 'with an axv', isCorrect: false},
				{ answerText: 'with an epry', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The TXV sensing bulb should be located:',
			answerOptions: [
				{ answerText: 'at the six o\'clock position', isCorrect: false },
				{ answerText: 'at the twelve o\'clock position', isCorrect: false },
				{ answerText: 'at the three o\'clock position', isCorrect: false},
				{ answerText: 'on the suction line before the oil trap', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The electronic TEV sensing element should be located:',
			answerOptions: [
				{ answerText: 'in the suction line before the trap in direct contact with the refrigerant', isCorrect: true },
				{ answerText: 'on the suction line entering the compressor', isCorrect: false },
				{ answerText: 'adjacent to the equalizing line', isCorrect: false},
				{ answerText: 'at the six o\'clock position', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The TEV sensing bulb when placed on a line of less than 7/8" diameter should be:',
			answerOptions: [
				{ answerText: 'located at the six o\'clock position', isCorrect: false },
				{ answerText: 'located so as to not be in contact with oil', isCorrect: true },
				{ answerText: 'located at the four o\'clock position', isCorrect: false},
				{ answerText: 'uninsulated', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The TEV sensing bulb is to be located:',
			answerOptions: [
				{ answerText: 'downstream of the external equalizing line', isCorrect: false },
				{ answerText: 'downstream of the oil trap', isCorrect: false },
				{ answerText: 'upstream of the external equalizing line', isCorrect: true},
				{ answerText: 'upstream of the evaporator', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The capacity of a capillary tube is determined by:',
			answerOptions: [
				{ answerText: 'length and bore', isCorrect: true },
				{ answerText: 'pressure', isCorrect: false },
				{ answerText: 'temperature', isCorrect: false},
				{ answerText: 'diameter', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A desuperheating valve on a two stage compound system:',
			answerOptions: [
				{ answerText: 'cools 1st stage discharge gas with liquid injection', isCorrect: true },
				{ answerText: 'cools 2nd stage discharge gas with liquid injection', isCorrect: false },
				{ answerText: 'cools 2nd stage discharge gas with cool vapour', isCorrect: false},
				{ answerText: 'cools 1st stage discharge gas with cool vapour', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A heat exchanger between the liquid & suction line will:',
			answerOptions: [
				{ answerText: 'reduce superheat and reduce subcooling', isCorrect: false },
				{ answerText: 'increase superheat and increase subcooling', isCorrect: true },
				{ answerText: 'reduce superheat and increase subcooling', isCorrect: false},
				{ answerText: 'increase superheat and reduce subcooling', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Hot Gas bypass valves are installed:',
			answerOptions: [
				{ answerText: 'to ensure oil return', isCorrect: false },
				{ answerText: 'for capacity control', isCorrect: true },
				{ answerText: 'to assist in off cycle defrost', isCorrect: false},
				{ answerText: 'to relieve the condenser under high ambient conditions', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'An evaporator pressure regulating valve:',
			answerOptions: [
				{ answerText: 'senses evaporator outlet pressure', isCorrect: false },
				{ answerText: 'opens on a rise of inlet pressure', isCorrect: false },
				{ answerText: 'prevents too great a pressure to the compressor', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A crankcase pressure regulating valve:',
			answerOptions: [
				{ answerText: 'increases the pressure to the compressor', isCorrect: false },
				{ answerText: 'closes on a rise of inlet pressure', isCorrect: false },
				{ answerText: 'closes on a rise of outlet pressure', isCorrect: true},
				{ answerText: 'is used in conjunction with an epr', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The minimum pressure differential required for a heat pump reversing valve is:',
			answerOptions: [
				{ answerText: '50 psi', isCorrect: false },
				{ answerText: '60 psi', isCorrect: false },
				{ answerText: '75 psi', isCorrect: true},
				{ answerText: '100 psi', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'An abnormally low suction pressure will:',
			answerOptions: [
				{ answerText: 'cause a compressor to overheat', isCorrect: false },
				{ answerText: 'cause very low discharge temperatures', isCorrect: false },
				{ answerText: 'cause flashing in the sump', isCorrect: false},
				{ answerText: 'increase oil return to the compressor', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The purpose of a gas charged/pressure limiting TEVis:',
			answerOptions: [
				{ answerText: 'to prevent compressor motor overloading', isCorrect: false },
				{ answerText: 'to increase the flow of refrigerant to the compressor', isCorrect: false },
				{ answerText: 'to maximize evaporator efficiency', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'If there is no means of head pressure control on a condenser in a low ambient condition, this may happen:',
			answerOptions: [
				{ answerText: 'low suction pressure resulting from lower head and lower pressure differential across valve', isCorrect: false },
				{ answerText: 'increase in conditioned space temperature and relative humidity', isCorrect: false },
				{ answerText: 'decrease in space relative humidity and temperature', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The purpose of an eprv, in an ammonia system, with a double setting is:',
			answerOptions: [
				{ answerText: 'to maintain two different temperatures', isCorrect: true },
				{ answerText: 'to defrost the evaporator in the off cycle', isCorrect: false },
				{ answerText: 'to allow flexibility in choice of temperatures', isCorrect: false},
				{ answerText: 'to allow slow pull down', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The normal air flow across an air conditioning evaporator is:',
			answerOptions: [
				{ answerText: '450 cfm/ton', isCorrect: false },
				{ answerText: '500 cfm/ton', isCorrect: false },
				{ answerText: '400 cfm/ton', isCorrect: true},
				{ answerText: '600 cfm/ton', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The required air flow across an evaporative condenser is:',
			answerOptions: [
				{ answerText: '1000 cfm/ton', isCorrect: false },
				{ answerText: '800 cfm/ton', isCorrect: false },
				{ answerText: '600 cfm/ton', isCorrect: true},
				{ answerText: '1200 cfm/ton', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The required air flow across a standard air cooled condenser is:',
			answerOptions: [
				{ answerText: '1000 cfm/ton', isCorrect: true },
				{ answerText: '800 cfim/ton', isCorrect: false },
				{ answerText: '600 cfm/ton', isCorrect: false},
				{ answerText: '1200 cfm/ton', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The flow rate through a water chiller bundle having a 10° F delta(T) is:',
			answerOptions: [
				{ answerText: '3.0 gpm/ton', isCorrect: false },
				{ answerText: '2.8 gpm/ton', isCorrect: false },
				{ answerText: '2.4 gpm/ton', isCorrect: true},
				{ answerText: '1.5 gpm/ton', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The weight of one imperial gallon of water is:',
			answerOptions: [
				{ answerText: '10 Ibs', isCorrect: true },
				{ answerText: '8.33 Ibs', isCorrect: false },
				{ answerText: '62.4 lbs', isCorrect: false},
				{ answerText: '12 lbs', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The weight of one U.S. gallon of water is:',
			answerOptions: [
				{ answerText: '10 lbs', isCorrect: false },
				{ answerText: '8.33lbs', isCorrect: true },
				{ answerText: '62.4 Ibs', isCorrect: false},
				{ answerText: '12 lbs', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The required US gpm flow rate through a 300 ton chiller barrel having a 10°F at delta(T) is:',
			answerOptions: [
				{ answerText: '720 gpm', isCorrect: true },
				{ answerText: '280 gpm', isCorrect: false },
				{ answerText: '480 gpm', isCorrect: false},
				{ answerText: '350 gpm', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The quantity of heat absorbed in a chiller bundle with a 10°FAT and 200 US gpm is:',
			answerOptions: [
				{ answerText: '500,000 Btu/hr', isCorrect: false },
				{ answerText: '100,000 Btu/hr', isCorrect: false },
				{ answerText: '1,200,00 Btu/hr', isCorrect: false},
				{ answerText: '1,000,000 Btu/hr', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The quantity of heat absorbed in a chiller with a 10°Fdelta(T) and 200 Imperial gpm, is:',
			answerOptions: [
				{ answerText: '100,000 Btu/hr', isCorrect: false },
				{ answerText: '1,200,000 Btu/hr', isCorrect: true },
				{ answerText: '600,000 Btu/hr', isCorrect: false},
				{ answerText: '1,000,000 Btu/hr', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The water flow rate through a recirculating loop water cooled condenser, having a 10°Fdelta(T) is:',
			answerOptions: [
				{ answerText: '2.4 gpm/ton', isCorrect: false },
				{ answerText: '3.0 gpm/ton', isCorrect: true },
				{ answerText: '2.8 gpm/ton', isCorrect: false},
				{ answerText: '1.5 gpm/ton', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The water flow rate through a once through water cooled condenser, is:',
			answerOptions: [
				{ answerText: '2.4 gpm/ton', isCorrect: false },
				{ answerText: '3.0 gpm/ton', isCorrect: false },
				{ answerText: '2.8 gpm/ton', isCorrect: false},
				{ answerText: '1.5 gpm/ton', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A cooling tower will run better in which conditions?',
			answerOptions: [
				{ answerText: '85° DB & 65° WB', isCorrect: false },
				{ answerText: '90° DB & 60° WB', isCorrect: true },
				{ answerText: '70° DB & 66° WB', isCorrect: false},
				{ answerText: '75° DB & 70° WB', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A valve with 2 inlets and 1 outlet is a:',
			answerOptions: [
				{ answerText: 'mixing valve', isCorrect: true },
				{ answerText: 'diverting valve', isCorrect: false },
				{ answerText: '4 way valve', isCorrect: false},
				{ answerText: 'band valve', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A valve with 1 inlet and 2 outlets is a:',
			answerOptions: [
				{ answerText: 'mixing valve', isCorrect: false },
				{ answerText: 'diverting valve or bypass valve', isCorrect: true },
				{ answerText: '4 way valve', isCorrect: false},
				{ answerText: 'hand valve', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Three way valves are used with chilled water coils to:',
			answerOptions: [
				{ answerText: 'maintain water flow through the chller', isCorrect: true },
				{ answerText: 'maintain a constant load on the chiller', isCorrect: false },
				{ answerText: 'maintain flow through the coil', isCorrect: false},
				{ answerText: 'maintain efficiency', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'As air is cooled, what happens to the supply fan motor current draw?',
			answerOptions: [
				{ answerText: 'air density decreases and current draw goes down', isCorrect: false },
				{ answerText: 'air density increases and current draw goes down', isCorrect: false },
				{ answerText: 'air density increases and current draw goes up', isCorrect: true},
				{ answerText: 'air density increases and no change in current', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Cooling Tower Approach is the temperature difference:',
			answerOptions: [
				{ answerText: 'between the water leaving the tower & the WB Temp of the air entering', isCorrect: true },
				{ answerText: 'between the WB temp of the air leaving and WB temp of the air entering', isCorrect: false },
				{ answerText: 'between the water leaving and the DB temp of the air entering', isCorrect: false},
				{ answerText: 'between the DB temp entering and the DB temp leaving', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The water entering a chiller is 55° F, the delta(T) is 10°F, the approach is 4°F, calculate the SST',
			answerOptions: [
				{ answerText: '50°F', isCorrect: false },
				{ answerText: '48°F', isCorrect: false },
				{ answerText: '42°F', isCorrect: false},
				{ answerText: '41°F', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'From the above question, calculate the TD?',
			answerOptions: [
				{ answerText: '12°F', isCorrect: false },
				{ answerText: '14°F', isCorrect: true },
				{ answerText: '6°F', isCorrect: false},
				{ answerText: '8°F', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Bleed Off:',
			answerOptions: [
				{ answerText: 'is the waste chemical particulate drain in an open condenser water loop', isCorrect: false },
				{ answerText: 'must be carefully adjusted and monitored to avoid chemical waste', isCorrect: false },
				{ answerText: 'is a means of relieving system pressure', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A variable air volume system:',
			answerOptions: [
				{ answerText: 'maintains a constant air supply to a space', isCorrect: false },
				{ answerText: 'maintains a constant supply air temperature to a space', isCorrect: false },
				{ answerText: 'varies the air volume to a space', isCorrect: false},
				{ answerText: 'b & c', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Cavitation of a centrifugal water pump is caused by:',
			answerOptions: [
				{ answerText: 'a plugged strainer on the suction side of the pump', isCorrect: false },
				{ answerText: 'an oversized impeller', isCorrect: false },
				{ answerText: 'too low of a pressure at the pump inlet in a steam condensate return line', isCorrect: false},
				{ answerText: 'any of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The Ph level of water is controlled in a condenser water loop to:',
			answerOptions: [
				{ answerText: 'reduce acid formation', isCorrect: false },
				{ answerText: 'to minimize alkaline formation', isCorrect: false },
				{ answerText: 'to control hydrogen ion activity', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The cooling tower heat exchanger control sensor should be located:',
			answerOptions: [
				{ answerText: 'leaving the evaporator', isCorrect: false },
				{ answerText: 'entering the condenser', isCorrect: false },
				{ answerText: 'leaving the condenser', isCorrect: true},
				{ answerText: 'entering the evaporator', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'An enthalpy control senses:',
			answerOptions: [
				{ answerText: 'relative humidity and wet bulb temperature', isCorrect: false },
				{ answerText: 'dry bulb temperature', isCorrect: false },
				{ answerText: 'relative humidity and dry bulb temperature', isCorrect: true},
				{ answerText: 'relative humidity', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The economizers purpose is to:',
			answerOptions: [
				{ answerText: 'provide fresh air', isCorrect: false },
				{ answerText: 'maintain the space temperature without bringing on mechanical cooling', isCorrect: false },
				{ answerText: 'a & b', isCorrect: true},
				{ answerText: 'maintain return air temperature', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Economizer dampers will open:',
			answerOptions: [
				{ answerText: 'on a fall of outdoor enthalpy', isCorrect: true },
				{ answerText: 'on a rise of outdoor enthalpy', isCorrect: false },
				{ answerText: 'on a fall of COn levels', isCorrect: false},
				{ answerText: 'on a fall of space temperature', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'In a pneumatic valve, the throttling range is:',
			answerOptions: [
				{ answerText: 'the range between set point and mid point', isCorrect: false },
				{ answerText: 'the range over which the valve operates', isCorrect: true },
				{ answerText: 'the difference between set point and differential', isCorrect: false},
				{ answerText: 'the difference between set point and maximum deviation', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Control range in a temperature control is:',
			answerOptions: [
				{ answerText: 'the difference between cut-in and set point', isCorrect: false },
				{ answerText: 'the difference between cut-out and set point', isCorrect: false },
				{ answerText: 'the difference between cut-in and cut-out', isCorrect: true},
				{ answerText: 'the maximum operating differential range', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Pneumatic stats are calibrated with the valve:',
			answerOptions: [
				{ answerText: 'at minimum position', isCorrect: false },
				{ answerText: 'at maximum position', isCorrect: false },
				{ answerText: 'at maximum position', isCorrect: false},
				{ answerText: 'at midrange position', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The operator of an electric/pneumatic device:',
			answerOptions: [
				{ answerText: 'pneumatic', isCorrect: false },
				{ answerText: 'electric', isCorrect: true },
				{ answerText: 'electronic', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The controller of an electronic/electric device is:',
			answerOptions: [
				{ answerText: 'pneumatic', isCorrect: false },
				{ answerText: 'electric', isCorrect: false },
				{ answerText: 'electronic', isCorrect: true},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The operator in a pneumatic/electric device is:',
			answerOptions: [
				{ answerText: 'pneumatic', isCorrect: true },
				{ answerText: 'electric', isCorrect: false },
				{ answerText: 'electronic', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Low voltage wiring:',
			answerOptions: [
				{ answerText: 'may be run in the same conduit as line voltage wiring', isCorrect: false },
				{ answerText: 'is not affected by the magnetic field of its surroundings', isCorrect: false },
				{ answerText: 'should not be run in the same conduit as line voltage wiring', isCorrect: true},
				{ answerText: 'will be of a minimum 16 gauge', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When two diodes have been placed in series, they will:',
			answerOptions: [
				{ answerText: 'stop the flow of current', isCorrect: false },
				{ answerText: 'decrease the flow of current', isCorrect: false },
				{ answerText: 'have no affect on the flow of current', isCorrect: true},
				{ answerText: 'increase the flow of current to the load', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A thermistor is:',
			answerOptions: [
				{ answerText: 'a thermally sensitive semi-conductor', isCorrect: true },
				{ answerText: 'a fixed resistor', isCorrect: false },
				{ answerText: 'two dissimilar metals, joined together', isCorrect: false},
				{ answerText: 'a thermal reactor', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A positive temperature coefficient thermistor will:',
			answerOptions: [
				{ answerText: 'increase resistance on a fall in temperature', isCorrect: false },
				{ answerText: 'decrease resistance on a fall in temperature', isCorrect: true },
				{ answerText: 'decrease resistance on a rise in temperature', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'If an electrical phase is lost to a three phase motor:',
			answerOptions: [
				{ answerText: 'voltage goes up', isCorrect: false },
				{ answerText: 'voltage goes down', isCorrect: false },
				{ answerText: 'current goes up', isCorrect: false},
				{ answerText: 'b & c', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'If a phase is lost to a single phase load:',
			answerOptions: [
				{ answerText: 'unit stops', isCorrect: true },
				{ answerText: 'current goes up', isCorrect: false },
				{ answerText: 'voltage goes up', isCorrect: false},
				{ answerText: 'voltage is unchanged', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Three phase power factor is calculated by.:',
			answerOptions: [
				{ answerText: 'volts x amps x 1.73', isCorrect: false },
				{ answerText: 'watts & 1.73', isCorrect: false },
				{ answerText: 'measured watts / ( volts x amps)', isCorrect: false},
				{ answerText: 'measured watts / ( volts × amps x 1.73)', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Single phase power factor is measured by:',
			answerOptions: [
				{ answerText: 'volts × amps', isCorrect: false },
				{ answerText: 'measured watts / ( volts x amps)', isCorrect: true },
				{ answerText: 'volts × amps x 1.73', isCorrect: false},
				{ answerText: 'watts x1.73', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'To reverse a three phase motor;',
			answerOptions: [
				{ answerText: 'interchange all three leads', isCorrect: false },
				{ answerText: 'interchange any two leads', isCorrect: true },
				{ answerText: 'change phase A with neutral lead', isCorrect: false},
				{ answerText: 'change phase A with ground lead', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'To reverse a CSR motor:',
			answerOptions: [
				{ answerText: 'interchange the start capacitor leads', isCorrect: false },
				{ answerText: 'interchange the run capacitor leads', isCorrect: false },
				{ answerText: 'interchange the start winding leads', isCorrect: true},
				{ answerText: 'change out the capacitor', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Which starter will provide the softest start for a low torque application?',
			answerOptions: [
				{ answerText: 'auto transformer', isCorrect: false },
				{ answerText: 'across the line', isCorrect: false },
				{ answerText: 'wye-delta', isCorrect: true},
				{ answerText: 'primary reactance', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'In an AC circuit, what opposes current flow?',
			answerOptions: [
				{ answerText: 'voltage', isCorrect: false },
				{ answerText: 'reactance', isCorrect: false },
				{ answerText: 'inductance', isCorrect: false},
				{ answerText: 'impedance', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'When measuring voltage in a circuit:',
			answerOptions: [
				{ answerText: 'the leads are placed in parallel to the load', isCorrect: false },
				{ answerText: 'safety shield and protective gloves will be worn', isCorrect: false },
				{ answerText: 'you will verify the meter operation by checking for voltage at a known source then at measured source then back to the known source', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'If the resistance reading from start to run terminals is 15 ohms, what will be the resistance from common to start?',
			answerOptions: [
				{ answerText: '3 ohms', isCorrect: false },
				{ answerText: '1 ohm', isCorrect: false },
				{ answerText: '12 ohms', isCorrect: true},
				{ answerText: '15 ohms', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A transformer has a primary voltage of 120 with 200 turns and a secondary voltage of 24 volts, what is the number of turns in the secondary?',
			answerOptions: [
				{ answerText: '500', isCorrect: false },
				{ answerText: '40', isCorrect: true },
				{ answerText: '120', isCorrect: false},
				{ answerText: '48', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The inrush current of a Wye-Delta start motor compared with an across the line, is:',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '0.578', isCorrect: true },
				{ answerText: '1.73', isCorrect: false},
				{ answerText: '0.71', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The basic control circuit consists of:',
			answerOptions: [
				{ answerText: 'control agent, energy source, controller, controlled device', isCorrect: true },
				{ answerText: 'controlled device, heat exchanger, controller', isCorrect: false },
				{ answerText: 'control agent, controlled device, controller,', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'As the depth of a coil is increased, what will happen?',
			answerOptions: [
				{ answerText: 'space RH increases', isCorrect: false },
				{ answerText: 'space RH decreases', isCorrect: true },
				{ answerText: 'approach temperature lowers', isCorrect: false},
				{ answerText: 'b & c', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'PH level:',
			answerOptions: [
				{ answerText: 'above 7.0 is alkaline', isCorrect: false },
				{ answerText: 'below 7.0 is acidic', isCorrect: false },
				{ answerText: 'is the measure of Hydrogen Ion activity', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A blown head gasket in a reciprocating compressor will result in:',
			answerOptions: [
				{ answerText: 'damaged valves', isCorrect: true },
				{ answerText: 'unit off on high head pressure', isCorrect: false },
				{ answerText: 'fresh oil', isCorrect: false},
				{ answerText: 'refrigerant boiling off in the sump', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The oil failure control in the de-energized state will:',
			answerOptions: [
				{ answerText: 'have its safety contacts closed', isCorrect: false },
				{ answerText: 'have its pressure switch closed', isCorrect: false },
				{ answerText: 'have its heater energized', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The normally closed lockout or high impedance relay will:',
			answerOptions: [
				{ answerText: 'have its safety contacts in series with the LOR coil', isCorrect: false },
				{ answerText: 'have its safety contacts in series with the Compressor contactor or control relay', isCorrect: false },
				{ answerText: 'have its coil in parallel with the safety switches', isCorrect: false},
				{ answerText: 'b & c', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The normally open lockout relay:',
			answerOptions: [
				{ answerText: 'acts as a holding relay providing safeties are made', isCorrect: true },
				{ answerText: 'is not affected by power interruptions', isCorrect: false },
				{ answerText: 'has a high impedance coil', isCorrect: false},
				{ answerText: 'has its coil in series with the load', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A system demonstrates abnormally high suction and abnormally low discharge pressures. What is the problem?',
			answerOptions: [
				{ answerText: 'defective reversing valve', isCorrect: false },
				{ answerText: 'defective compressor valves', isCorrect: false },
				{ answerText: 'defective internal pressure relief', isCorrect: false},
				{ answerText: 'any of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'If the jumper in a 3 wire oil failure control is removed:',
			answerOptions: [
				{ answerText: 'the safeties will not close', isCorrect: false },
				{ answerText: 'the compressor continues to run on a loss of oil pressure', isCorrect: true },
				{ answerText: 'the pressure switch will not close', isCorrect: false},
				{ answerText: 'the heater will remain energized', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Which type of fan is considered non-overloading?',
			answerOptions: [
				{ answerText: 'forward curve', isCorrect: false },
				{ answerText: 'Propeller type', isCorrect: false },
				{ answerText: 'Backward inclined', isCorrect: true},
				{ answerText: 'Axial', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'If the ductwork falls off an air delivery system using a forward curve fan, what could happen?',
			answerOptions: [
				{ answerText: 'no problem as the forward curved fan is non overloading', isCorrect: false },
				{ answerText: 'motor overamps and trips the breaker', isCorrect: true },
				{ answerText: 'static pressure increases', isCorrect: false},
				{ answerText: 'cooling load decreases', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A 10" × 20" rectangular duct has a "K\' factor of 0.9 and a velocity of 600 ft/min. Calculate the air flow:',
			answerOptions: [
				{ answerText: '833 cfm', isCorrect: false },
				{ answerText: '1,000 cfm', isCorrect: false },
				{ answerText: '108,000 cfm', isCorrect: false},
				{ answerText: '750 cfm', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A diode allows electrons to flow:',
			answerOptions: [
				{ answerText: 'from cathode to anode', isCorrect: false },
				{ answerText: 'from anode to cathode', isCorrect: true },
				{ answerText: 'without any voltage drop', isCorrect: false},
				{ answerText: 'in both directions', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The formula for inductive reactance is:',
			answerOptions: [
				{ answerText: 'XL=2xPxFxL', isCorrect: true },
				{ answerText: 'Xc = 1 / 2xPxFxC', isCorrect: false },
				{ answerText: 'nan', isCorrect: false},
				{ answerText: 'nan', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The formula for capacitive reactance is',
			answerOptions: [
				{ answerText: 'XL=2xPxFxL', isCorrect: false },
				{ answerText: 'Xc = 1 / 2xPxFxC', isCorrect: true },
				{ answerText: 'nan', isCorrect: false},
				{ answerText: 'nan', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A decrease in a motors frequency will result in:',
			answerOptions: [
				{ answerText: 'increased speed', isCorrect: false },
				{ answerText: 'increased horsepower', isCorrect: false },
				{ answerText: 'decreased speed', isCorrect: true},
				{ answerText: 'leave speed unchanged', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The potential start relay\'s:',
			answerOptions: [
				{ answerText: 'contacts are normally closed in series with the start winding', isCorrect: false },
				{ answerText: 'coil is energized by back emf', isCorrect: false },
				{ answerText: 'contacts are in parallel with the start winding', isCorrect: false},
				{ answerText: 'a & b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The terminals 2 and 5 on a potential relay identify the:',
			answerOptions: [
				{ answerText: 'coil', isCorrect: true },
				{ answerText: 'normally open contacts', isCorrect: false },
				{ answerText: 'normally closed contacts', isCorrect: false},
				{ answerText: 'common', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A current starting relay\'s contacts are:',
			answerOptions: [
				{ answerText: 'normally closed in series with the run winding', isCorrect: false },
				{ answerText: 'normally open in series with the start winding', isCorrect: false },
				{ answerText: 'position sensitive', isCorrect: false},
				{ answerText: 'b & c', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Defrost time clock allows for defrost to be initiated by:',
			answerOptions: [
				{ answerText: 'time and temperature', isCorrect: false },
				{ answerText: 'time or temperature', isCorrect: false },
				{ answerText: 'time only', isCorrect: true},
				{ answerText: 'temperature only', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Defrost in a refrigeration system may be terminated by:',
			answerOptions: [
				{ answerText: 'time and temperature', isCorrect: false },
				{ answerText: 'temperature', isCorrect: false },
				{ answerText: 'pressure', isCorrect: false},
				{ answerText: 'any or all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'When two 300 ufd capacitors are wired in series, the result is:',
			answerOptions: [
				{ answerText: '300 ufd', isCorrect: false },
				{ answerText: '600 ufd', isCorrect: false },
				{ answerText: '750 ufd', isCorrect: false},
				{ answerText: '150 ufd', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'When two 300 ufd capacitors are wired in parallel, the result is:',
			answerOptions: [
				{ answerText: '750 ufa', isCorrect: false },
				{ answerText: '150 ufd', isCorrect: false },
				{ answerText: '600 ufd', isCorrect: true},
				{ answerText: '150 ufd', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When making ice cubes, the condition that would cause clouding is:',
			answerOptions: [
				{ answerText: 'air bubbles caused by agitation', isCorrect: true },
				{ answerText: 'high mineral concentration', isCorrect: false },
				{ answerText: 'excessive water flow', isCorrect: false},
				{ answerText: 'excessive harvest time', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'If thermostatic type temperature control loses its charge, what will happen?',
			answerOptions: [
				{ answerText: 'contacts remain closed', isCorrect: false },
				{ answerText: 'contacts remain opened', isCorrect: false },
				{ answerText: 'no change', isCorrect: false},
				{ answerText: 'contacts will default to open or closed', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Cascade systems are typically found when temperatures are:',
			answerOptions: [
				{ answerText: 'below - 80° F to - 200° F', isCorrect: false },
				{ answerText: 'below -30° F to - 80° F', isCorrect: true },
				{ answerText: 'below 0° F to -30° F', isCorrect: false},
				{ answerText: 'below 40° F to 0° F', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Why is the receiver located in the water tank of an evaporative condenser?',
			answerOptions: [
				{ answerText: 'de-superheating of the gas', isCorrect: false },
				{ answerText: 'de-superheating of the liquid', isCorrect: false },
				{ answerText: 'sub-cooling of the refrigerant liquid', isCorrect: false},
				{ answerText: 'sub-cooling of the refrigerant gas', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A cooling tower with a heat exchanger will have the sensor located',
			answerOptions: [
				{ answerText: 'in the heat exchanger loop entering the condenser', isCorrect: true },
				{ answerText: 'in the heat exchanger loop entering the cooling tower', isCorrect: false },
				{ answerText: 'in the condenser outlet', isCorrect: false},
				{ answerText: 'in the heat exchanger inlet', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A three phase motor has a power factor of 0.82, a voltage of 575 and a current of 10 amps. Calculate the power:',
			answerOptions: [
				{ answerText: '1664 watts', isCorrect: false },
				{ answerText: '2882 watts', isCorrect: false },
				{ answerText: '3603 watts', isCorrect: false},
				{ answerText: '8.166 kw', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The air entering a 100,000 btuh furnace is at 70°F and is heated to 180° F. The unit name plate says the temperature rise is between 50 to 90° F. Calculate the cfm:',
			answerOptions: [
				{ answerText: '842 cfm', isCorrect: true },
				{ answerText: '1029 cfm', isCorrect: false },
				{ answerText: '889 cfm', isCorrect: false},
				{ answerText: '741 cfm', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'For question 236, what should the minimum air flow be?',
			answerOptions: [
				{ answerText: '842 cfm', isCorrect: false },
				{ answerText: '1029 cfm', isCorrect: true },
				{ answerText: '889 cfm', isCorrect: false},
				{ answerText: '1852 cfm', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'What would be the maximum flow rate for the above question, to avoid condensation?',
			answerOptions: [
				{ answerText: '842 cfm', isCorrect: false },
				{ answerText: '1852 cfm', isCorrect: true },
				{ answerText: '1029 cfm', isCorrect: false},
				{ answerText: '1000 cfm', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Evaporator TD determines:',
			answerOptions: [
				{ answerText: 'The RE of the refrigerated space', isCorrect: false },
				{ answerText: 'The temperature of the refrigerated space', isCorrect: false },
				{ answerText: 'The unloader operation', isCorrect: false},
				{ answerText: 'a &b', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A potentiometer is a type of:',
			answerOptions: [
				{ answerText: 'two position control', isCorrect: false },
				{ answerText: 'thermistor', isCorrect: false },
				{ answerText: 'wheatstone bridge', isCorrect: true},
				{ answerText: 'digital device', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The purpose of the bleed resistor across a capacitor is to:',
			answerOptions: [
				{ answerText: 'protect the potential relay contacts', isCorrect: false },
				{ answerText: 'protect the current relay contacts', isCorrect: false },
				{ answerText: 'protect the capacitor', isCorrect: true},
				{ answerText: 'enable easy starts', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The cooling anticipator is wired:',
			answerOptions: [
				{ answerText: 'in parallel with the heating stat', isCorrect: false },
				{ answerText: 'in series with the heating stat', isCorrect: false },
				{ answerText: 'in parallel with the temperature control', isCorrect: true},
				{ answerText: 'in series with the temperature control', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The heating anticipator is wired:',
			answerOptions: [
				{ answerText: 'in parallel with the temperature control', isCorrect: false },
				{ answerText: 'in series with the temperature control', isCorrect: true },
				{ answerText: 'in parallel with the cooling stat', isCorrect: false},
				{ answerText: 'does not matter', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Globe valves:',
			answerOptions: [
				{ answerText: 'close against the flow', isCorrect: true },
				{ answerText: 'close with the flow', isCorrect: false },
				{ answerText: 'are not used in HVAC applications', isCorrect: false},
				{ answerText: 'have poor shutoff control', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Flow Coefficient Cy of a valve is determined by:',
			answerOptions: [
				{ answerText: 'the pressure drop across the valve', isCorrect: false },
				{ answerText: 'the flow through the valve', isCorrect: false },
				{ answerText: 'nan', isCorrect: false},
				{ answerText: 'the quantity of water in gpm that flows through the valve with a pressure  differential of 1 psi', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A fast response type of control as found across a water coil for freeze protection will have a response time of how many times faster than a normal control?',
			answerOptions: [
				{ answerText: 'the same', isCorrect: false },
				{ answerText: 'twice as fast', isCorrect: true },
				{ answerText: 'three times as fast', isCorrect: false},
				{ answerText: 'four times as fast', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The dew point temperature (DPT) can be read at the intersection if which lines and curves',
			answerOptions: [
				{ answerText: 'WBT and DBT', isCorrect: false },
				{ answerText: 'WBT line and RH curve', isCorrect: false },
				{ answerText: 'DBT line and the RH curve', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'If the values are known, which of the following will not help you determine the grains of moisture in the air (GR/lb)',
			answerOptions: [
				{ answerText: 'DBT and RH', isCorrect: false },
				{ answerText: 'DBT and DPT', isCorrect: false },
				{ answerText: 'WBT and DPT', isCorrect: false},
				{ answerText: 'WBT and DBT', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'At what point does the evaporation cease at the wet bulb?',
			answerOptions: [
				{ answerText: '50% RH', isCorrect: false },
				{ answerText: 'when GR/lb = WBT', isCorrect: false },
				{ answerText: 'when DPT is greater then DBT', isCorrect: false},
				{ answerText: '100% RH', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'A barometric reading is an indication of',
			answerOptions: [
				{ answerText: 'absolute pressure', isCorrect: false },
				{ answerText: 'atmospheric pressure', isCorrect: true },
				{ answerText: 'gage pressure', isCorrect: false},
				{ answerText: 'duct pressure', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'One atmosphere equals',
			answerOptions: [
				{ answerText: '34 ft of water', isCorrect: false },
				{ answerText: '14.7 psi', isCorrect: false },
				{ answerText: '29.92 in.Hg', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Standard air is _________ at a pressure of 29.92 in. Hg',
			answerOptions: [
				{ answerText: '70°F DB. 50%RH', isCorrect: false },
				{ answerText: '70F DB,0% RH', isCorrect: true },
				{ answerText: '70°F saturated air', isCorrect: false},
				{ answerText: '55°F DP', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Discharge air from a heating coil would leave __________ then when it entered the coil',
			answerOptions: [
				{ answerText: 'at a higher RH', isCorrect: false },
				{ answerText: 'at a lower DP', isCorrect: false },
				{ answerText: 'at a lower RH', isCorrect: true},
				{ answerText: 'at a higher DP', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Discharge air from a cooling coil would leave _________ then when it entered the coil',
			answerOptions: [
				{ answerText: 'at a higher WB temperature', isCorrect: false },
				{ answerText: 'at a lower relative humidity', isCorrect: false },
				{ answerText: 'at a lower specific volume', isCorrect: true},
				{ answerText: 'at a higher absolute humidity', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'As conditioned air passes over an evaporator coil, the air\'s',
			answerOptions: [
				{ answerText: 'specific volume increases', isCorrect: false },
				{ answerText: 'enthalpy remains unchanged', isCorrect: false },
				{ answerText: 'RH decreases', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Moisture injected into the air by a steam humidifier raises the air\'s',
			answerOptions: [
				{ answerText: 'relative humidity', isCorrect: false },
				{ answerText: 'specific volume', isCorrect: false },
				{ answerText: 'enthalpy', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'An increase in sensible heat will.',
			answerOptions: [
				{ answerText: 'increase RH', isCorrect: false },
				{ answerText: 'increase Specific Humidity, increase WB', isCorrect: false },
				{ answerText: 'decrease RH DB remain the same', isCorrect: false},
				{ answerText: 'increase WB, and decrease RH', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'As the coil bypass factor increases',
			answerOptions: [
				{ answerText: 'the coils efficiency increases', isCorrect: false },
				{ answerText: 'the coils efficiency decreases', isCorrect: true },
				{ answerText: 'the efficiently will only change if the coil temperature changes.', isCorrect: false},
				{ answerText: 'nan', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Reducing the fin spacing on a coil will change the bypass factor in what way',
			answerOptions: [
				{ answerText: 'increase the bypass factor', isCorrect: false },
				{ answerText: 'decrease the bypass factor', isCorrect: true },
				{ answerText: 'nan', isCorrect: false},
				{ answerText: 'not effect it', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Humidification would make what change to the heat content of the air stream',
			answerOptions: [
				{ answerText: 'sensible', isCorrect: false },
				{ answerText: 'latent', isCorrect: true },
				{ answerText: 'latent, and sensible', isCorrect: false},
				{ answerText: 'not really effect the heat content', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Specific heat of standard air is',
			answerOptions: [
				{ answerText: '0.24', isCorrect: true },
				{ answerText: '0.75', isCorrect: false },
				{ answerText: '1', isCorrect: false},
				{ answerText: '4.5', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The effective coil temperature can be found by',
			answerOptions: [
				{ answerText: 'subtracting the sensible heat factor from the supply air temperature', isCorrect: false },
				{ answerText: 'calculating by dividing the bypass factor by the leaving air temperature', isCorrect: true },
				{ answerText: 'drawing a line from the entering air properties straight across to the dew point', isCorrect: false},
				{ answerText: 'follow the process line through to the saturation line', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The out door air is 90 degrees F and the return 74 degrees F with 15% outdoor air coming into the space what will the mixture temperature be',
			answerOptions: [
				{ answerText: '75', isCorrect: false },
				{ answerText: '76.4', isCorrect: true },
				{ answerText: '82', isCorrect: false},
				{ answerText: '87.5', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'What is the maximum tolerance for misalignment for a v-belt?',
			answerOptions: [
				{ answerText: '1/64 per foot center to center', isCorrect: false },
				{ answerText: '00:45:00', isCorrect: false },
				{ answerText: '.003 per foot center to center', isCorrect: false},
				{ answerText: '1/10 per foot center to center', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'What would the maximum wear be allowed on a v-groove pulley?',
			answerOptions: [
				{ answerText: '0.015625', isCorrect: false },
				{ answerText: '0.03125', isCorrect: true },
				{ answerText: '0.0625', isCorrect: false},
				{ answerText: '0.003', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The lone tube on a reversing valve is connected to',
			answerOptions: [
				{ answerText: 'discharge of the condenser', isCorrect: false },
				{ answerText: 'suction of the compressor', isCorrect: false },
				{ answerText: 'discharge of the compressor', isCorrect: true},
				{ answerText: 'depend weather the coil fail to heating, or fails to cooling', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'There three tubes together on one side of a reversing valve, the outside left tube is',
			answerOptions: [
				{ answerText: 'connected to the suction of the compressor', isCorrect: false },
				{ answerText: 'connected to the outside coil', isCorrect: false },
				{ answerText: 'connected to the discharge of the compressor', isCorrect: false},
				{ answerText: 'one of the coils', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The balance point of a heat pump is',
			answerOptions: [
				{ answerText: 'useful to know when you are lifting the unit into place', isCorrect: false },
				{ answerText: 'the point of time that you should be taking your readings to check the performance of the heat pump', isCorrect: false },
				{ answerText: 'when the reversing valve will not switch over', isCorrect: false},
				{ answerText: 'the point that it becomes cheaper to heat with the auxiliary heat', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'An air cooled condenser installed in a cold location below the evaporator may not start because:',
			answerOptions: [
				{ answerText: 'head pressure is too low', isCorrect: false },
				{ answerText: 'low pressure cutout is keeping unit off', isCorrect: false },
				{ answerText: 'refrigerant has migrated to condensing unit', isCorrect: false},
				{ answerText: 'b & c', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'Replacement or makeup water for cooling tower is equal to:',
			answerOptions: [
				{ answerText: '3-5%', isCorrect: false },
				{ answerText: '6- 10%', isCorrect: true },
				{ answerText: '10-20 %', isCorrect: false},
				{ answerText: '20-30 %', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The cooling tower spray nozzles are designed to:',
			answerOptions: [
				{ answerText: 'increase heat exchanger surface area for better heat transfer', isCorrect: true },
				{ answerText: 'decrease heat exchanger surface area for less heat transfer', isCorrect: false },
				{ answerText: 'aid in washing the air', isCorrect: false},
				{ answerText: 'none of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Increased spring tension on an automatic expansion valve AEV, will:',
			answerOptions: [
				{ answerText: 'increase superheat', isCorrect: false },
				{ answerText: 'decrease pressure in the evaporator', isCorrect: true },
				{ answerText: 'flood the coil at start up', isCorrect: false},
				{ answerText: 'flood the coil at the end of the cycle', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A restricted capillary tube is shortened and cut with a triangular file. The result is:',
			answerOptions: [
				{ answerText: 'lower discharge pressure', isCorrect: true },
				{ answerText: 'higher suction pressure', isCorrect: false },
				{ answerText: 'system charge requires lessening', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'A centrifugal water pump running backwards will:',
			answerOptions: [
				{ answerText: 'continue to pump', isCorrect: false },
				{ answerText: 'provide less head', isCorrect: true },
				{ answerText: 'draw more amps', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'What will happen to a centrifugal pump if the suction strainer becomes restricted?',
			answerOptions: [
				{ answerText: 'cavitation', isCorrect: false },
				{ answerText: 'worn seals', isCorrect: false },
				{ answerText: 'a & b', isCorrect: false},
				{ answerText: 'nothing', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The purpose of the aux CWPS contacts are:',
			answerOptions: [
				{ answerText: 'holding contacts for the chilled water pump starter', isCorrect: false },
				{ answerText: 'control the condenser water pump starter', isCorrect: false },
				{ answerText: 'allow for continuous pump out', isCorrect: false},
				{ answerText: 'all of the above', isCorrect: true},
			 ],
		  },
		  {
			questionText: 'The compressor fails mechanically because of liquid refrigerant. The cause is:',
			answerOptions: [
				{ answerText: 'CR2 coil is burned out', isCorrect: false },
				{ answerText: '2MC auxiliaries stuck open', isCorrect: false },
				{ answerText: 'CnWPS OL open', isCorrect: true},
				{ answerText: 'FS TDR coil burned out', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'Costumer complaint of no cooling, the cause is:',
			answerOptions: [
				{ answerText: 'compressor not running', isCorrect: true },
				{ answerText: '1MC aux contacts welded open', isCorrect: false },
				{ answerText: 'temperature control set too low', isCorrect: false},
				{ answerText: 'OFC heater burned out', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'No cooling, what is the cause?',
			answerOptions: [
				{ answerText: '2nd stage thermostat not closing', isCorrect: false },
				{ answerText: 'OFC SC closed', isCorrect: true },
				{ answerText: 'TDR 1 not closing', isCorrect: false},
				{ answerText: 'LOR coil burned out', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The purpose of FS TDR coil is:',
			answerOptions: [
				{ answerText: 'loss of flow protection', isCorrect: false },
				{ answerText: 'momentary loss of flow bypass', isCorrect: true },
				{ answerText: 'To maintain pump out', isCorrect: false},
				{ answerText: 'To energize transformer', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'The nc LOR contacts will open on:',
			answerOptions: [
				{ answerText: 'loss of system power', isCorrect: false },
				{ answerText: 'loss of cooling tower fan motor', isCorrect: false },
				{ answerText: 'when PPD closes', isCorrect: true},
				{ answerText: 'when PDR nc contacts open', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'There are how many inductive loads within this circuit?',
			answerOptions: [
				{ answerText: '15', isCorrect: false },
				{ answerText: '23', isCorrect: false },
				{ answerText: '22', isCorrect: false},
				{ answerText: '24', isCorrect: true},
			 ],
		  }
		  
		  	
	];

	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const navigate = useNavigate()


	//const shuffleQuestions = array => {
	//	for (let i = array.length - 1; i > 0; i--) {
	//		const j = Math.floor(Math.random() * (i + 1));
	//		const temp = array[i];
	//		array[i] = array[j];
	//		array[j] = temp;
	//	}
	//	return array;
	//};

	//shuffleQuestions(questions);

	const handleAnswerOptionClick = (isCorrect, guessIndex) => {
		if (isCorrect) {
			setScore(score + 1);
		} else {
			wrong[wrongCount] = questions[currentQuestion];
			wrongCount = wrongCount + 1;
			guess[wrongCount] = guessIndex;
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const onRestartClick = () => {
		setShowScore(false);
		setScore(0);
		setCurrentQuestion(0);
		//shuffleQuestions(questions);
		wrongCount = 0;
	}

	const toggleShowWrong = () => {
		navigate('/results')
	}
    
	return (
		<div className='quiz'>
			{showScore ? (
				<>
					<div className='score-section'>
						You scored {score} out of {questions.length}
					</div>
					<div className="buttons-wow">
			            <ButtonGroup className="button-group">
						<Button
							variant="primary"
							size="lg"
							active
							onClick={() => onRestartClick()}
						>
							Restart
						</Button>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						<Button
							//class="btn btn-outline-primary"
							variant="primary"
							size="lg"
							active
							onClick={() => toggleShowWrong()}
						>
							Show Results
						</Button>
						</ButtonGroup>
          			</div>
				</>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						<button id='button1' onClick={() => handleAnswerOptionClick(questions[currentQuestion].answerOptions[0].isCorrect, 0)}>{questions[currentQuestion].answerOptions[0].answerText}</button>
						<button id='button2' onClick={() => handleAnswerOptionClick(questions[currentQuestion].answerOptions[1].isCorrect, 1)}>{questions[currentQuestion].answerOptions[1].answerText}</button>
						<button id='button3' onClick={() => handleAnswerOptionClick(questions[currentQuestion].answerOptions[2].isCorrect, 2)}>{questions[currentQuestion].answerOptions[2].answerText}</button>
						<button id='button4' onClick={() => handleAnswerOptionClick(questions[currentQuestion].answerOptions[3].isCorrect, 3)}>{questions[currentQuestion].answerOptions[3].answerText}</button>
					</div>
				</>
			)}
		</div>
	);
}


export function resetWrong () {
	wrongCount = 0;
}



