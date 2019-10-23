import React, { useEffect, useState } from 'react';

import FixedSpendingList from '../components/FixedSpendingList';
import { FixedCostCategory, Prisma, TimeFrame } from '../prisma-client';
import { useGlobalState } from '../state/useGlobalState';
import { ActionType } from '../state/reducer';

interface IFixedSpendingListContainerProps {
	api: string;
};

const FixedSpendingListContainer: React.FC<IFixedSpendingListContainerProps> = ({ api }) => {
	const { state, dispatch } = useGlobalState();
	const { fixedList, budgetedAmount, income } = state;
	const [newCostName, setNewCostName] = useState("");
	const [newCostAmount, setNewCostAmount] = useState(0);

	const prisma = new Prisma({
		endpoint: api
	});

	let monthlyIncome: number;
	switch (income.frequency) {
		case "Weekly":
			monthlyIncome = income.amount * 4;
		case "Monthly":
			monthlyIncome = income.amount;
		case "Biweekly" || "Semimomthly":
			monthlyIncome = income.amount * 2;
		default:
			monthlyIncome = income.amount;
	}

	// Query costList on mount
	useEffect(() => {
		const fetchCostList = async () => {
			const currentCostList = await prisma.fixedCostCategories();
			currentCostList.forEach(cost => {
				dispatch({
					type: ActionType.AddFixedCategory,
					payload: cost
				})
			});
		};

		fetchCostList();
	}, [])

	const removeCostFromList = async (name: string) => {
		await prisma.deleteFixedCostCategory({ name: name });
		dispatch({
			type: ActionType.DeleteFixedCategory,
			payload: name
		});
	};

	const addNewCostToList = async () => {
		if (newCostName !== "" && newCostAmount !== 0) {
			const result = await prisma.createFixedCostCategory({ name: newCostName, amount: newCostAmount });
			dispatch({
				type: ActionType.AddFixedCategory,
				payload: result
			});
		}
	};

	return (
		<FixedSpendingList 
			budgetedAmount={budgetedAmount}
			costs={fixedList} 
			monthlyIncome={monthlyIncome}
			newName={newCostName} 
			newAmount={newCostAmount} 
			changeNewName={setNewCostName} 
			changeNewAmount={setNewCostAmount} 
			removeCost={removeCostFromList} 
			submitCost={addNewCostToList} 
		/>
	);
};

export default FixedSpendingListContainer;