import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function CartBadge() {
  return (
    <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon fontSize="small" />
    </Badge>
  );
}