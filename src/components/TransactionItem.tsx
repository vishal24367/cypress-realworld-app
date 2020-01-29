import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  ListItem,
  Button,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TransactionResponseItem } from "../models";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  card: {
    minWidth: "100%"
  },
  title: {
    fontSize: 14
  }
});

type TransactionProps = {
  transaction: TransactionResponseItem;
};

const TransactionItem: React.FC<TransactionProps> = ({ transaction }) => {
  const classes = useStyles();
  const history = useHistory();
  // Payment
  /*if (transaction.) {

  }

  // Request
  if (transaction.requestStatus === "pending") {

  }*/

  const showTransactionDetail = (transactionId: string) => {
    history.push(`/transaction/${transactionId}`);
  };

  return (
    <ListItem
      data-test={`transaction-item-${transaction.id}`}
      onClick={() => showTransactionDetail(transaction.id)}
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {transaction.description}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            data-test={`transaction-like-count-${transaction.id}`}
          >
            Likes: {transaction.likes ? transaction.likes.length : 0}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            data-test={`transaction-comment-count-${transaction.id}`}
          >
            Comments: {transaction.comments ? transaction.comments.length : 0}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            size="small"
            onClick={() => showTransactionDetail(transaction.id)}
            data-test={`transaction-view-${transaction.id}`}
          >
            View Transaction
          </Button>
        </CardActions>
      </Card>
    </ListItem>
  );
};

export default TransactionItem;