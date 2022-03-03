import { Avatar, Box, Card, CardContent, Divider, Typography } from "@material-ui/core";

const ShowroomProfile = ({ showroom, handleChangeAvatar, ...props }) => {

  const renderAvatar = () => {
    if (showroom.avatar) {
      return showroom.avatar;
    }
    if (showroom.temporaryAvatar) {
      return showroom.temporaryAvatar;
    }
    return './static/images/defaultAvatar.png';
  }

  const avatar = renderAvatar();


  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            Tên: {showroom.name}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body2"
          >
            Số điện thoại: {showroom.phoneNumber}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Địa chỉ: {showroom.address}
          </Typography>
          {/* <Typography
            color="textSecondary"
            variant="body2"
          >
            {user.timezone}
          </Typography> */}
        </Box>
      </CardContent>
      <Divider />
    </Card>
  )
};

export default ShowroomProfile;